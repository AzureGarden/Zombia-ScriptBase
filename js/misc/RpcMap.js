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

const ReceivingRpcNames = {
    PartyKey: "PartyKey",
    PartyBuilding: "PartyBuilding",
    PartyRequest: "PartyRequest",
    PartyRequestCancelled: "PartyRequestCancelled",
    PartyRequestMet: "PartyRequestMet",
    PartyMembersUpdated: "PartyMembersUpdated",
    UpdateParty: "UpdateParty",
    UpdateLeaderboard: "UpdateLeaderboard",
    UpdateDayNightCycle: "UpdateDayNightCycle",
    Respawned: "Respawned",
    SetTool: "SetTool",
    Dead: "Dead",
    ToolInfo: "ToolInfo",
    BuildingInfo: "BuildingInfo",
    SpellInfo: "SpellInfo",
    BuySpellResponse: "BuySpellResponse",
    ClearActiveSpell: "ClearActiveSpell",
    EntityData: "EntityData",
    ModelProps: "ModelProps",
    Failure: "Failure",
    ReceiveChatMessage: "ReceiveChatMessage"
};

const SendingRpcNames = {
    RandomisePartyKey: "RandomisePartyKey",
    CancelPartyRequest: "CancelPartyRequest",
    TogglePartyVisibility: "TogglePartyVisibility",
    Respawn: "Respawn",
    TogglePrimaryAggro: "TogglePrimaryAggro",
    LeaveParty: "LeaveParty",
    UpgradeBuilding: "UpgradeBuilding",
    SellBuilding: "SellBuilding",
    SendChatMessage: "SendChatMessage",
    SetPartyName: "SetPartyName",
    JoinParty: "JoinParty",
    KickMember: "KickMember",
    TogglePartyPermission: "TogglePartyPermission",
    PartyRequest: "PartyRequest",
    PartyRequestResponse: "PartyRequestResponse",
    PlaceBuilding: "PlaceBuilding",
    BuyTool: "BuyTool",
    EquipTool: "EquipTool",
    BuySpell: "BuySpell",
    Admin: "Admin",
    AdminCommand: "AdminCommand"
}

export { ReceivingRpcNames, SendingRpcNames };