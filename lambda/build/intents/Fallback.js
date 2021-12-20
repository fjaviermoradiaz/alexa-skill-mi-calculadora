"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fallback = void 0;
const helpers_1 = require("../utilities/helpers");
const constants_1 = require("../utilities/constants");
const i18next_1 = __importDefault(require("i18next"));
exports.Fallback = {
    canHandle(handlerInput) {
        return helpers_1.IsIntent(handlerInput, constants_1.IntentTypes.Fallback);
    },
    handle(handlerInput) {
        const speechText = i18next_1.default.t(constants_1.Strings.ERROR_MSG);
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(i18next_1.default.t(constants_1.Strings.HELP_MSG))
            .getResponse();
    },
};
//# sourceMappingURL=Fallback.js.map