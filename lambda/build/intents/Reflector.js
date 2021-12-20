"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reflector = void 0;
const ask_sdk_core_1 = require("ask-sdk-core");
const helpers_1 = require("../utilities/helpers");
const constants_1 = require("../utilities/constants");
const i18next_1 = __importDefault(require("i18next"));
exports.Reflector = {
    canHandle(handlerInput) {
        return helpers_1.IsType(handlerInput, constants_1.RequestTypes.Intent);
    },
    handle(handlerInput) {
        const speechText = i18next_1.default.t(constants_1.Strings.REFLECTOR_MSG, {
            intentName: ask_sdk_core_1.getIntentName(handlerInput.requestEnvelope),
        });
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(i18next_1.default.t(constants_1.Strings.SKILL_NAME), speechText)
            .getResponse();
    },
};
//# sourceMappingURL=Reflector.js.map