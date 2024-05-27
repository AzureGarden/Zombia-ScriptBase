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

// This function is deprecated
// One should dispatch events via #dispatchEvent in the DispatchHub instead
export function createEvent(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
}

export function getUpdatedProperties(oldObj, newObj) {
    // We're assuming lodash is available here
    return _.pickBy(newObj, (value, key) => !_.isEqual(value, oldObj[key]));
}

export function extractUpdatedProperties(oldEntityData, entityData) {
    const updatedProperties = getUpdatedProperties(oldEntityData, entityData);
    const propertiesChanged = Object.keys(updatedProperties).length > 0;
    return { updatedProperties, propertiesChanged };
}