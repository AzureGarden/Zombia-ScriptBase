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

import EntityEventResponseFacility from "../Response-Facilty/EntityResponse";
import ControlCenterBase from "./ControlCenterBase";

class EntityControl extends ControlCenterBase {
    constructor() {
        super();

        const {
            handlePlayerDied,
            handlePlayerRespawned,
            handlePlayerInvulnerable,
            handlePlayerHealthChange,
            handlePlayerPositionChange,
            handlePlayerDamaged,
            handlePlayerAimingYawChange,
            handlePlayerResourceUpdate,
            handleServerEntityUpdate,
            handleServerPlayerCreated,
            handleServerPlayerDeleted,
            handleLocalEntityCreated,
            handleLocalEntityDeleted,
            handleLocalEntityPropertiesUpdated,
            handleLocalBuildingCreated,
            handleLocalBuildingDeleted,
            handleLocalBuildingUpdated
        } = EntityEventResponseFacility;

        this.eventHandlers = {
            "PlayerDied": handlePlayerDied,
            "PlayerRespawned": handlePlayerRespawned,
            "PlayerInvulnerable": handlePlayerInvulnerable,
            "PlayerHealthChange": handlePlayerHealthChange,
            "PlayerPositionChange": handlePlayerPositionChange,
            "PlayerDamaged": handlePlayerDamaged,
            "PlayerAimingYawChange": handlePlayerAimingYawChange,
            "PlayerResourceUpdate": handlePlayerResourceUpdate,
            "ServerEntityUpdate": handleServerEntityUpdate,
            "ServerPlayerCreated": handleServerPlayerCreated,
            "ServerPlayerDeleted": handleServerPlayerDeleted,
            "LocalEntityCreated": handleLocalEntityCreated,
            "LocalEntityDeleted": handleLocalEntityDeleted,
            "LocalEntityPropertiesUpdated": handleLocalEntityPropertiesUpdated,
            "LocalBuildingCreated": handleLocalBuildingCreated,
            "LocalBuildingDeleted": handleLocalBuildingDeleted,
            "LocalBuildingUpdated": handleLocalBuildingUpdated,
        };
    }
}

export default EntityControl;