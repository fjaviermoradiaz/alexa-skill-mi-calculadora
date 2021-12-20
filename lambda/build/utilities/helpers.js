"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSlotValues = exports.IsType = exports.IsIntent = void 0;
const constants_1 = require("./constants");
/**
 * Checks if the request matches any of the given intents.
 *
 * @param handlerInput
 * @param intents
 */
function IsIntent(handlerInput, ...intents) {
    if (handlerInput.requestEnvelope.request.type === constants_1.RequestTypes.Intent) {
        for (let i = 0; i < intents.length; i++) {
            if (handlerInput.requestEnvelope.request.intent.name === intents[i]) {
                return true;
            }
        }
    }
    return false;
}
exports.IsIntent = IsIntent;
/**
 * Checks if the request matches any of the given types.
 *
 * @param handlerInput
 * @param types
 */
function IsType(handlerInput, ...types) {
    for (let i = 0; i < types.length; i++) {
        if (handlerInput.requestEnvelope.request.type === types[i]) {
            return true;
        }
    }
    return false;
}
exports.IsType = IsType;
function GetSlotValues(filledSlots) {
    const slotValues = {};
    if (filledSlots) {
        Object.keys(filledSlots).forEach((item) => {
            const name = filledSlots[item].name;
            const value = filledSlots[item].value;
            const confirmationStatus = filledSlots[item].confirmationStatus;
            if (filledSlots[item] &&
                filledSlots[item].resolutions &&
                filledSlots[item].resolutions.resolutionsPerAuthority &&
                filledSlots[item].resolutions.resolutionsPerAuthority[0] &&
                filledSlots[item].resolutions.resolutionsPerAuthority[0].status &&
                filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) {
                switch (filledSlots[item].resolutions.resolutionsPerAuthority[0].status.code) {
                    case "ER_SUCCESS_MATCH":
                        const valueWrappers = filledSlots[item].resolutions.resolutionsPerAuthority[0].values;
                        if (valueWrappers.length > 1) {
                            slotValues[name] = {
                                name: name,
                                value: value,
                                isMatch: true,
                                resolved: valueWrappers[0].value.name,
                                id: valueWrappers[0].value.id,
                                isAmbiguous: true,
                                values: valueWrappers.map((valueWrapper) => valueWrapper.value),
                                confirmationStatus: confirmationStatus,
                            };
                            break;
                        }
                        slotValues[name] = {
                            name: name,
                            value: value,
                            isMatch: true,
                            resolved: valueWrappers[0].value.name,
                            id: valueWrappers[0].value.id,
                            isAmbiguous: false,
                            values: [],
                            confirmationStatus: confirmationStatus,
                        };
                        break;
                    case "ER_SUCCESS_NO_MATCH":
                        slotValues[name] = {
                            name: name,
                            value: value,
                            isMatch: false,
                            confirmationStatus: confirmationStatus,
                        };
                        break;
                    default:
                        break;
                }
            }
            else {
                slotValues[name] = {
                    name: name,
                    value: value,
                    isMatch: false,
                    confirmationStatus: confirmationStatus,
                };
            }
        });
    }
    return slotValues;
}
exports.GetSlotValues = GetSlotValues;
//# sourceMappingURL=helpers.js.map