"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorProcessor = void 0;
const constants_1 = require("../utilities/constants");
const i18next_1 = __importDefault(require("i18next"));
/**
 * Handles ErrorTypes.Unexpected errors which should be thrown when something
 * unexpected happens.
 */
exports.ErrorProcessor = {
    canHandle(handlerInput, error) {
        return true;
    },
    handle(handlerInput, error) {
        console.log('Error handled: ${error.message}');
        return handlerInput.responseBuilder
            .speak(i18next_1.default.t(constants_1.Strings.ERROR_MSG))
            .getResponse();
    },
};
//# sourceMappingURL=ErrorProcessor.js.map