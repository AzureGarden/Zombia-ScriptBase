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

class DOMDispatch {
    constructor() {
        this.observers = [];
    }

    observe() {
        document.onmousemove = (event) => {
            const eventPayload = new CustomEvent("DOMEvent", {
                detail: {
                    type: "MouseMove",
                    data: {
                        x: event.clientX,
                        y: event.clientY
                    }
                }
            });

            this.analyze("MouseMove", eventPayload);
        }

        document.onmousedown = (event) => {
            const eventPayload = new CustomEvent("DOMEvent", {
                detail: {
                    type: "MouseDown",
                    data: {
                        x: event.clientX,
                        y: event.clientY
                    }
                }
            });

            this.analyze("MouseDown", eventPayload);
        }
    }

    analyze(eventType, event) {
        const eventDetail = event.detail;

        let processedData;
        const baseData = {
            analyzed: true,
            timestamp: Date.now(),
            id: `${eventType}-${Math.random().toString(36).slice(2, 11)}`
        };

        if (eventType === "MouseMove" || eventType === "MouseDown") {
            processedData = {
                mousePos: {
                    x: eventDetail.data.x,
                    y: eventDetail.data.y
                },
                ...baseData
            };
        } else {
            processedData = {
                ...eventDetail.data,
                ...baseData
            };
        }

        this.dispatchEvent(eventType, processedData);
    }

    dispatchEvent(eventType, eventData) {
        document.dispatchEvent(new CustomEvent("DOMEvent", {
            detail: {
                type: eventType,
                ...eventData
            }
        }));
    }

    createObserver(elementId, eventType, data) {
        this.observers.push({ elementId, eventType, handler: { type: eventType, data } });

        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener("click", (nativeEvent) => {
                const event = new CustomEvent("DOMEvent", {
                    detail: {
                        type: eventType,
                        data: {
                            ...data,
                            nativeEventData: nativeEvent
                        }
                    }
                });

                this.analyze(eventType, event);
            });
        } else {
            console.warn(`Element with id ${elementId} not found`);
        }
    }

    deleteObserver(elementId, eventType) {
        this.observers = this.observers.filter((observer) => !(observer.elementId === elementId && observer.eventType === eventType));

        const element = document.getElementById(elementId);
        if (element) {
            element.removeEventListener(eventType, this.handleEvent);
        }
    }
}

export default DOMDispatch;