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

// Utilities
import { createEvent } from "./js/Utils";
import DebugManager from "./js/Debug";

// Core Modules
import ScriptProperties from "./js/ScriptProperties";

// Event Dispatchers
import DOMEventDispatcher from "./js/Dispatcher/DOMDispatch";
import EntityEventDispatcher from "./js/Dispatcher/EntityDispatch";
import RpcEventDispatcher from "./js/Dispatcher/RPCDispatch";

// Control Centers
import DOMEventControlCenter from "./js/Control-Center/DOMControl";
import EntityEventControlCenter from "./js/Control-Center/EntityControl";
import RpcControlCenter from "./js/Control-Center/RPCControl";

const initiationGateway = {
    bootstrap: function () {
        this.startup();
    },
    startup: function () {
        try {
            // Debugging Purposes
            // Remove in production
            globalThis.debug = DebugManager;
            globalThis.scriptProperties = ScriptProperties;
            globalThis.createEvent = createEvent;

            // Control Centers
            // Must be first to initialize
            // Else the event listeners will not be able to listen to the events
            const entityControlCenter = new EntityEventControlCenter();
            const rpcControlCenter = new RpcControlCenter();
            const domEventControlCenter = new DOMEventControlCenter();

            // Attach event listeners
            document.addEventListener("EntityEvent", entityControlCenter.handleEvent);
            document.addEventListener("RpcEvent", rpcControlCenter.handleEvent);
            document.addEventListener("DOMEvent", domEventControlCenter.handleEvent);

            const entityEventDispatcher = new EntityEventDispatcher();
            const rpcEventDispatcher = new RpcEventDispatcher();
            const domEventDispatcher = new DOMEventDispatcher();
            // Deprecated
            // This issue is known as "Dispatch Hub’s createObserver Method Requires Global Exposure In Order To Be Accessible "
            // It is a tracked issue that is being worked on
            // I will not be providing a fix for this public example 
            globalThis.createDomObserver = (elementId, eventType, data) => domEventDispatcher.createObserver(elementId, eventType, data);

            // Kickstart the event loop
            rpcEventDispatcher.observe();
            entityEventDispatcher.observe();
            domEventDispatcher.observe();
        } catch (error) {
            console.error(error);
        }
    }
};

initiationGateway.bootstrap();