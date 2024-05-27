/*
 * This file is part of Zombia-ScriptBase (https://github.com/AzureGarden/Zombia-ScriptBase)
 *
 * Copyright (c) 2024 - 2024 LatiBlueLatios
 *
 * Zombia-ScriptBase is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Zombia-ScriptBase is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Zombia-ScriptBase. If not, see <https://www.gnu.org/licenses/>.
 */

import { extractUpdatedProperties } from "../Utils";
import ScriptProperties from "../ScriptProperties";
import DebugManager from "../DebugManager";

class EntityUpdateDispatcher {
    constructor() {
        this.isDead = false;
        this.wasInvulnerable = false;
        this.oldHealthValue = 0;
        this.oldPositionValue = { x: 0, y: 0 };
        this.oldLastDamageTick = 0;
        this.oldAimingYawValue = 0;
        this.oldResourceValue = { wood: 0, stone: 0, gold: 0, tokens: 0 };

        // Measure dispatched events per second
        this.dispatchedEvents = 0;
        this.dispatchedEventsValues = [];
        setInterval(() => {
            const currentTime = Date.now();

            this.dispatchedEventsValues = this.dispatchedEventsValues.filter(({ timestamp }) => currentTime - timestamp <= 1000);
            this.dispatchedEventsValues.push({ count: this.dispatchedEvents, timestamp: currentTime });
            this.dispatchedEvents = 0;

            const sum = this.dispatchedEventsValues.reduce((acc, { count }) => acc + count, 0);
            const average = sum / this.dispatchedEventsValues.length;

            if (DebugManager.events.entityEventCount) console.log(`Average dispatched events per second: ${average.toFixed(2)}`);
        }, 1000);
    }

    observe() {
        game.eventEmitter.on("EntityUpdate", updateData => this.analyze(updateData));
    }

    analyze(updateData) {
        const player = game.ui.getPlayerTick();
        if (!player || !game.getInWorld()) return;

        const events = [
            { type: "PlayerDied", condition: player.dead && !this.isDead, data: {} },
            { type: "PlayerRespawned", condition: !player.dead && this.isDead, data: {} },
            { type: "PlayerInvulnerable", condition: this.wasInvulnerable !== player.invulnerable, data: { value: player.invulnerable } },
            { type: "PlayerHealthChange", condition: player.health !== this.oldHealthValue, data: { value: player.health, valuePercent: (player.health / 500) * 100, oldValue: this.oldHealthValue, change: player.health - this.oldHealthValue } },
            { type: "PlayerPositionChange", condition: player.position.x !== this.oldPositionValue.x || player.position.y !== this.oldPositionValue.y, data: { value: player.position, oldValue: this.oldPositionValue, change: { x: player.position.x - this.oldPositionValue.x, y: player.position.y - this.oldPositionValue.y } } },
            { type: "PlayerDamaged", condition: player.lastDamagedTick !== this.oldLastDamageTick, data: { value: player.lastDamagedTick, oldValue: this.oldLastDamageTick, change: player.lastDamagedTick - this.oldLastDamageTick } },
            { type: "PlayerAimingYawChange", condition: player.aimingYaw !== this.oldAimingYawValue, data: { value: player.aimingYaw, oldValue: this.oldAimingYawValue, change: player.aimingYaw - this.oldAimingYawValue } },
            { type: "PlayerResourceUpdate", condition: player.wood !== this.oldResourceValue.wood || player.stone !== this.oldResourceValue.stone || player.gold !== this.oldResourceValue.gold || player.tokens !== this.oldResourceValue.tokens, data: { value: { wood: player.wood, stone: player.stone, gold: player.gold, tokens: player.tokens }, oldValue: this.oldResourceValue } },
            { type: "ServerEntityUpdate", condition: true, data: { value: updateData } }
        ];

        events.forEach(event => {
            if (event.condition) {
                this.dispatchEvent("EntityEvent", {
                    type: event.type,
                    ...event.data
                });

                if (event.type === "PlayerDied") this.isDead = true;
                if (event.type === "PlayerRespawned") this.isDead = false;
                if (event.type === "PlayerInvulnerable") this.wasInvulnerable = player.invulnerable;
                if (event.type === "PlayerHealthChange") this.oldHealthValue = player.health;
                if (event.type === "PlayerPositionChange") this.oldPositionValue = player.position;
                if (event.type === "PlayerDamaged") this.oldLastDamageTick = player.lastDamagedTick;
                if (event.type === "PlayerAimingYawChange") this.oldAimingYawValue = player.aimingYaw;
                if (event.type === "PlayerResourceUpdate") this.oldResourceValue = { wood: player.wood, stone: player.stone, gold: player.gold, tokens: player.tokens };
            }
        });

        const { localEntities, localEntityIds } = ScriptProperties.scriptData;

        for (let entityId in updateData.entities) {
            const entityData = updateData.entities[entityId];
            const currentEntity = localEntities.get(entityId);

            if (currentEntity !== undefined) {
                const { updatedProperties, propertiesChanged } = extractUpdatedProperties(currentEntity, entityData);

                if (!propertiesChanged) continue;

                localEntities.set(entityId, entityData);
                this.dispatchEvent("LocalEntityPropertiesUpdated", { entityId, value: entityData, updatedProperties });
            } else if (entityData !== true) {
                if (entityData.entityClass === "Player") {
                    this.dispatchEvent({ type: "ServerPlayerCreated", entityId, value: entityData });
                }

                localEntities.set(entityId, entityData);
                localEntityIds.add(entityId);
                this.dispatchEvent("LocalEntityCreated", { entityId, value: entityData });
            }
        }

        for (let [entityId, entityData] of localEntities.entries()) {
            if (!(entityId in updateData.entities)) {
                if (entityData.entityClass === "Player") {
                    this.dispatchEvent({ type: "ServerPlayerDeleted", value: entityData });
                }

                localEntities.delete(entityId);
                localEntityIds.delete(entityId);
                this.dispatchEvent("LocalEntityDeleted", { value: entityData });
            }
        }
    }

    dispatchEvent(type, rest) {
        this.dispatchedEvents++;
        const baseData = {
            analyzed: true,
            timestamp: Date.now(),
            id: `EntityUpdate-${Math.random().toString(36).slice(2, 11)}`
        };

        document.dispatchEvent(new CustomEvent("EntityEvent", { detail: { type, ...rest, ...baseData } }));
    }
}

export default EntityUpdateDispatcher;