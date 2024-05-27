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

const RpcResponse = {
    handlePartyKey({ value}) {
        DebugManager.log("partyKey", "Party Key: ", value);
    },

    handlePartyBuilding({ value }) {
        DebugManager.log("partyBuilding", "Party Building: ", value);
    },

    handlePartyRequest({ value }) {
        DebugManager.log("partyRequest", "Party Request: ", value);
    },

    handlePartyRequestCancelled({ value }) {
        DebugManager.log("partyRequestCancelled", "Party Request Cancelled: ", value);
    },

    handlePartyRequestMet({ value }) {
        DebugManager.log("partyRequestMet", "Party Request Met: ", value);
    },

    handlePartyMembersUpdated({ value }) {
        DebugManager.log("partyMembersUpdated", "Party Members Updated: ", value);
    },

    handleUpdateParty({ value }) {
        DebugManager.log("updateParty", "Update Party: ", value);
    },

    handleUpdateLeaderboard({ value }) {
        DebugManager.log("updateLeaderboard", "Update Leaderboard: ", value);
    },

    handleUpdateDayNightCycle({ value }) {
        DebugManager.log("updateDayNightCycle", "Update Day Night Cycle: ", value);
    },

    handleRespawned({ value }) {
        DebugManager.log("respawned", "Respawned: ", value);
    },

    handleSetTool({ value }) {
        DebugManager.log("setTool", "Set Tool: ", value);
    },

    handleDead({ value }) {
        DebugManager.log("dead", "Dead: ", value);
    },

    handleToolInfo({ value }) {
        DebugManager.log("toolInfo", "Tool Info: ", value);
    },

    handleBuildingInfo({ value }) {
        DebugManager.log("buildingInfo", "Building Info: ", value);
    },

    handleSpellInfo({ value }) {
        DebugManager.log("spellInfo", "Spell Info: ", value);
    },

    handleBuySpellResponse({ value }) {
        DebugManager.log("buySpellResponse", "Buy Spell Response: ", value);
    },

    handleClearActiveSpell({ value }) {
        DebugManager.log("clearActiveSpell", "Clear Active Spell: ", value);
    },

    handleEntityData({ value }) {
        DebugManager.log("entityData", "Entity Data: ", value);
    },

    handleModelProps({ value }) {
        DebugManager.log("modelProps", "Model Props: ", value);
    },

    handleFailure({ value }) {
        DebugManager.log("failure", "Failure: ", value);
    },

    handleReceiveChatMessage({ value }) {
        DebugManager.log("receiveChatMessage", "Receive Chat Message: ", value);
    },
};

export default RpcResponse;