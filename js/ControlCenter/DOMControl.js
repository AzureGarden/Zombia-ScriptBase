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

import ControlCenterBase from "./ControlCenterBase";
import DOMResponse from "../ResponseFacility/DOMResponse";

class DOMControl extends ControlCenterBase {
    constructor() {
        super();

        const {
            handleMouseMove,
            handleMouseDown,
            handleButtonClicked
        } = DOMResponse;

        this.eventHandlers = {
            "MouseMove": handleMouseMove,
            "MouseDown": handleMouseDown,
            "ButtonClicked": handleButtonClicked
        };
    }
}

export default DOMControl;