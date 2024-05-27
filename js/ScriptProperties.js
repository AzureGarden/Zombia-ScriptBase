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

const ScriptProperties = {
    scriptData: {
        // No actual code is attached to localBuildings
        // Why?
        // Because this is a public example and the actual code is not public
        // Prevents skids from copying my code and using it for their own gain
        // I regret having the entity code public, but I need it for the example
        // Oh well, skidders gonna skid
        localBuildings: new Set(),
        localEntities: new Map(),
        localEntityIds: new Set(),
        mousePos: { x: 0, y: 0 },
    },
    scripts: {
        // Example
        autoHeal: {
            status: false,
            thresholdPercent: 10,
        },
    },
    alerts: {
        // Example
        stashDied: {
            status: false,
        }
    }
};

export default ScriptProperties;