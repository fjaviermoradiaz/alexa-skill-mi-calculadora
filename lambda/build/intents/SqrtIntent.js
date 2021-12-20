"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqrtIntent = void 0;
const helpers_1 = require("../utilities/helpers");
const constants_1 = require("../utilities/constants");
const i18next_1 = __importDefault(require("i18next"));
exports.SqrtIntent = {
    canHandle(handlerInput) {
        return helpers_1.IsIntent(handlerInput, constants_1.IntentTypes.SqrtIntent);
    },
    handle(handlerInput) {
        const speechText = i18next_1.default.t(constants_1.Strings.HELLO_MSG);
        //let slots = GetSlotValues(handlerInput.requestEnvelope.request.intent.slots);
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(i18next_1.default.t(constants_1.Strings.SKILL_NAME), speechText)
            .getResponse();
    },
};
//# sourceMappingURL=SqrtIntent.js.map