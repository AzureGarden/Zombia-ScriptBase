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

import { createEvent } from "../Utils";
import { ReceivingRpcNames, SendingRpcNames } from "../misc/RpcMap";

class RpcEventDispatcher {
    observe() {
        for (const rpcName in SendingRpcNames) {
            if (Object.hasOwnProperty.call(SendingRpcNames, rpcName)) {
                const eventName = `${rpcName}RpcSent`;

                game.eventEmitter.on(eventName, (data) => {
                    createEvent("RpcEvent", {
                        type: rpcName,
                        value: data
                    });
                });
            }
        }

        for (const rpcName in ReceivingRpcNames) {
            if (Object.hasOwnProperty.call(ReceivingRpcNames, rpcName)) {
                const eventName = `${rpcName}RpcReceived`;

                game.eventEmitter.on(eventName, (data) => {
                    createEvent("RpcEvent", {
                        type: rpcName,
                        value: data
                    });
                });
            }
        }
    }
}

export default RpcEventDispatcher;