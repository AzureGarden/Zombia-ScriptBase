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

import ScriptProperties from "../ScriptProperties";

const DOMResponse = {
    handleMouseMove: ({ mousePos }) => {
        ScriptProperties.scriptData.mousePos = mousePos;
        // Do you really need to log the mouse position every time it moves?
        // That's a lot of logs, so I'm going to comment this out
        // console.log("handling mouse move", mousePos);
    },

    handleMouseDown: ({ mousePos }) => {
        console.log("handling mouse down", mousePos);
    },
};

export default DOMResponse;