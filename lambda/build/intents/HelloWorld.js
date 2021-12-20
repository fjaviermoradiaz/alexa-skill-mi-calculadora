"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorld = void 0;
const helpers_1 = require("../utilities/helpers");
const constants_1 = require("../utilities/constants");
const i18next_1 = __importDefault(require("i18next"));
exports.HelloWorld = {
    canHandle(handlerInput) {
        return helpers_1.IsIntent(handlerInput, constants_1.IntentTypes.HelloWorld);
    },
    handle(handlerInput) {
        const speechText = i18next_1.default.t(constants_1.Strings.HELLO_MSG);
        return handlerInput.responseBuilder
            .speak(speechText)
            .withSimpleCard(i18next_1.default.t(constants_1.Strings.SKILL_NAME), speechText)
            .getResponse();
    },
};
//# sourceMappingURL=HelloWorld.js.map