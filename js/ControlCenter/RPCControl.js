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

import RpcResponse from "../ResponseFacilty/RPCResponse";
import ControlCenterBase from "./ControlCenterBase";

class RPCControl extends ControlCenterBase {
    constructor() {
        super();

        const {
            handlePartyKey,
            handlePartyBuilding,
            handlePartyRequest,
            handlePartyRequestCancelled,
            handlePartyRequestMet,
            handlePartyMembersUpdated,
            handleUpdateParty,
            handleUpdateLeaderboard,
            handleUpdateDayNightCycle,
            handleRespawned,
            handleDead,
            handleToolInfo,
            handleBuildingInfo,
            handleSpellInfo,
            handleBuySpellResponse,
            handleClearActiveSpell,
            handleEntityData,
            handleModelProps,
            handleFailure,
            handleReceiveChatMessage
        } = RpcResponse;

        this.eventHandlers = {
            "PartyKey": handlePartyKey,
            "PartyBuilding": handlePartyBuilding,
            "PartyRequest": handlePartyRequest,
            "PartyRequestCancelled": handlePartyRequestCancelled,
            "PartyRequestMet": handlePartyRequestMet,
            "PartyMembersUpdated": handlePartyMembersUpdated,
            "UpdateParty": handleUpdateParty,
            "UpdateLeaderboard": handleUpdateLeaderboard,
            "UpdateDayNightCycle": handleUpdateDayNightCycle,
            "Respawned": handleRespawned,
            "SetTool": handleSetTool,
            "Dead": handleDead,
            "ToolInfo": handleToolInfo,
            "BuildingInfo": handleBuildingInfo,
            "SpellInfo": handleSpellInfo,
            "BuySpellResponse": handleBuySpellResponse,
            "ClearActiveSpell": handleClearActiveSpell,
            "EntityData": handleEntityData,
            "ModelProps": handleModelProps,
            "Failure": handleFailure,
            "ReceiveChatMessage": handleReceiveChatMessage,
        };
    }
}

export default RPCControl;