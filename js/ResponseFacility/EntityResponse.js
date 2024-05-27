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

import DebugManager from "../DebugManager";

const EntityEventResponseFacility = {
    handlePlayerDied: function () {
        DebugManager.log("playerDied", "Player died!");
    },

    handlePlayerRespawned: function () {
        DebugManager.log("playerRespawned", "Player respawned!");
    },

    handlePlayerInvulnerable: function ({ value }) {
        DebugManager.log("playerInvulnerable", `Player is ${value ? "" : "no longer "}invulnerable!`);
    },

    handlePlayerHealthChange: function ({ value, valuePercent, oldValue, change }) {
        DebugManager.log("playerHealthChange", `Player health changed! New health: ${value} / 500 ${valuePercent}, Old health: ${oldValue}, Change: ${change}`);
    },

    handlePlayerPositionChange: function ({ value, oldValue, change }) {
        DebugManager.log("playerPositionChange", `Player position changed! New Position: ${value.x}, ${value.y}, Old Position: ${oldValue.x}, ${oldValue.y}, Change: ${change.x}, ${change.y}`);
    },

    handlePlayerDamaged: function ({ value, oldValue, change }) {
        DebugManager.log("playerDamaged", `Player was damaged! Last damage tick: ${value}, Old last damage tick: ${oldValue}, Change: ${change}`);
    },

    handlePlayerAimingYawChange: function ({ value, oldValue, change }) {
        DebugManager.log("playerAimingYawChange", `Player aiming yaw changed! New aiming yaw: ${value}, Old aiming yaw: ${oldValue}, Change: ${change}`);
    },

    handlePlayerResourceUpdate: function ({ value, oldValue }) {
        DebugManager.log("playerResourceUpdate", `Player resources updated! New resources: ${value.wood} wood, ${value.stone} stone, ${value.gold} gold, ${value.tokens} tokens, Old resources: ${oldValue.wood} wood, ${oldValue.stone} stone, ${oldValue.gold} gold, ${oldValue.tokens} tokens`);
    },

    handleServerEntityUpdate: function ({ value }) {
        DebugManager.log("serverEntityUpdate", "Server entity update!", value);
    },

    handleServerPlayerCreated: function ({ value }) {
        DebugManager.log("serverPlayerCreated", "Server player created!", value);

        if (alerts.onPlayer) showHint(`Player "${value.name}" has entered your view!`, 3e3);
    },

    handleServerPlayerDeleted: function ({ value }) {
        DebugManager.log("serverPlayerDeleted", "Server player deleted!", value);
    },

    handleLocalEntityCreated: function ({ value }) {
        DebugManager.log("localEntityCreated", "Local entity created!", value);
    },

    handleLocalEntityDeleted: function ({ value }) {
        DebugManager.log("localEntityDeleted", "Local entity deleted!", value);
    },

    handleLocalEntityPropertiesUpdated: function ({ updatedProperties, entityId }) {
        DebugManager.log("localEntityPropertiesUpdated", `Local entity properties updated! Entity ID: ${entityId}, Modified Properties:`, updatedProperties);
    },

    handleLocalBuildingCreated: function ({ value }) {
        DebugManager.log("localBuildingCreated", "Local building created!", value);
    },

    handleLocalBuildingDeleted: function ({ value }) {
        DebugManager.log("localBuildingDeleted", "Local building deleted!", value);
    },

    handleLocalBuildingUpdated: function ({ value, updatedProperties }) {
        DebugManager.log("localBuildingUpdate", `Local building updated! Building:`, value.building, "Updated Properties:", updatedProperties);
    }
}

export default EntityEventResponseFacility;