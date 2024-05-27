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

const DebugManager = {
    events: {
        entityEventCount: false,
        playerDied: false,
        playerRespawned: false,
        playerInvulnerable: false,
        playerHealthChange: false,
        playerPositionChange: false,
        playerDamaged: false,
        playerAimingYawChange: false,
        playerResourceUpdate: false,
        serverEntityUpdate: false,
        localEntityCreated: false,
        localEntityDeleted: false,
        localEntityPropertiesUpdated: false,
        localBuildingCreated: false,
        localBuildingDeleted: false,
        LocalBuildingUpdated: false
    },
    rpc: {
        partyKey: false,
        partyBuilding: false,
        partyRequest: false,
        partyRequestCancelled: false,
        partyRequestMet: false,
        partyMembersUpdated: false,
        updateParty: false,
        updateLeaderboard: false,
        updateDayNightCycle: false,
        respawned: false,
        setTool: false,
        dead: false,
        toolInfo: false,
        buildingInfo: false,
        spellInfo: false,
        buySpellResponse: false,
        clearActiveSpell: false,
        entityData: false,
        modelProps: false,
        failure: false,
        receiveChatMessage: false,
    },
    game: {
        handleRpc: false,
        sendRpc: false,
    },
    tests: {
        measureScore: false,
        measureZombies: true,
    },
    log(type, msg, ...values) {
        if ((this.events[type]) || (this.game[type]) || (this.rpc[type])) console.log(msg, ...values);
    },
    showHint(msg, duration = 3e3) {
        game.ui.components.uiPopupOverlay.showHint(msg, duration);
    }
};

export default DebugManager;