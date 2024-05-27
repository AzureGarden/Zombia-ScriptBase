# Zombia-ScriptBase

This repository is a public example of my script-base that I've made for Zombia. The script-base is event driven and written in my custom programming style. What originally started as a small experimentation has turned into a massive, fully fleshed out project.

**Important**: This is a public example. The full, premium script, packed with additional features (Zombs Script Port, Session-Saver), is available for a one-time purchase of $20. Please do not inquire about other offers at this time, as the market is not open to the public.

## Installation

### Prerequisites

To get started, you'll need:

- NodeJS: The runtime environment for the script.
- IDE (Recommended): An Integrated Development Environment will streamline your workflow.
- Zombia Platform: You'll need either a modified Zombia environment (like a LocalHost version) or a browser extension like TamperMonkey. Please note that in order for the script to work on TamperMonkey you must use Webpack or the related.

### Installation Process

1. Clone the repository
2. Open the repository in your perferred IDE
3. Setup your platform
4. Launch Zombia

The script should be running as soon as you have everything set up.

## Documentation

This script base is built on an event-driven architecture. This means it reacts to specific actions and changes within the game, DOM, or network, triggering custom functions in response. Understanding this concept and how to use the CustomEvent API is crucial. Please do not proceed if you have a lack of knowledge on this concept, as it can lead to inadequate, ineffective code that is prone to memory leaks.

### Key Components

- Event Handlers: The script features three types of event handlers:
- DOMControl: Manages user interface interactions (mouse movements, clicks, etc.).
- EntityControl: Reacts to changes in the game world (player health, positions, etc.).
- RPCControl: Handles communication packets within the game (party updates, chat messages, etc.).
- ResponseFacility: This folder houses the handler function, the heart of the script. This function processes and directs the responses to each event.

Important Note: This script base demands advanced programming skills. A strong grasp of event-driven programming and browser DOM manipulation is non-negotiable.

Below is a list of all the events provided in the script base.

### DOMControl Events

| Event Type    | Handler Function      |
|---------------|-----------------------|
| MouseMove     | handleMouseMove       |
| MouseDown     | handleMouseDown       |
| ButtonClicked | handleButtonClicked   |

### EntityControl Events

| Event Type                  | Handler Function                |
|-----------------------------|---------------------------------|
| PlayerDied                  | handlePlayerDied                |
| PlayerRespawned             | handlePlayerRespawned           |
| PlayerInvulnerable          | handlePlayerInvulnerable        |
| PlayerHealthChange          | handlePlayerHealthChange        |
| PlayerPositionChange        | handlePlayerPositionChange      |
| PlayerDamaged               | handlePlayerDamaged             |
| PlayerAimingYawChange       | handlePlayerAimingYawChange     |
| PlayerResourceUpdate        | handlePlayerResourceUpdate      |
| ServerEntityUpdate          | handleServerEntityUpdate        |
| ServerPlayerCreated         | handleServerPlayerCreated       |
| ServerPlayerDeleted         | handleServerPlayerDeleted       |
| LocalEntityCreated          | handleLocalEntityCreated        |
| LocalEntityDeleted          | handleLocalEntityDeleted        |
| LocalEntityPropertiesUpdated| handleLocalEntityPropertiesUpdated |
| LocalBuildingCreated        | handleLocalBuildingCreated      |
| LocalBuildingDeleted        | handleLocalBuildingDeleted      |
| LocalBuildingUpdated        | handleLocalBuildingUpdated      |

### RPCControl Events

| Event Type                  | Handler Function                |
|-----------------------------|---------------------------------|
| PartyKey                    | handlePartyKey                  |
| PartyBuilding               | handlePartyBuilding             |
| PartyRequest                | handlePartyRequest              |
| PartyRequestCancelled       | handlePartyRequestCancelled     |
| PartyRequestMet             | handlePartyRequestMet           |
| PartyMembersUpdated         | handlePartyMembersUpdated       |
| UpdateParty                 | handleUpdateParty               |
| UpdateLeaderboard           | handleUpdateLeaderboard         |
| UpdateDayNightCycle         | handleUpdateDayNightCycle       |
| Respawned                   | handleRespawned                 |
| Dead                        | handleDead                      |
| SetTool                     | handleSetTool                   |
| ToolInfo                    | handleToolInfo                  |
| BuildingInfo                | handleBuildingInfo              |
| SpellInfo                   | handleSpellInfo                 |
| BuySpellResponse            | handleBuySpellResponse          |
| ClearActiveSpell            | handleClearActiveSpell          |
| EntityData                  | handleEntityData                |
| ModelProps                  | handleModelProps                |
| Failure                     | handleFailure                   |
| ReceiveChatMessage          | handleReceiveChatMessage        |

## Footnote

This project is licensed under the GNU General Public License. This means you are free to use, share, and modify this software. However, any derivative works you create must also be released under the same license. Please ensure you include the following license header in any modified versions of this script:

```js
/*
 * This file is part of [REPOSITORY_NAME_HERE] (GITHUB_LINK_HERE)
 *
 * Copyright (c) [START_YEAR] - [END_YEAR] [NAME]
 *
 * [REPOSITORY_NAME_HERE] is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * [REPOSITORY_NAME_HERE] is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with [REPOSITORY_NAME_HERE]. If not, see <https://www.gnu.org/licenses/>.
 */
 ```
