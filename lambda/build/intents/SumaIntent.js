"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumaIntent = void 0;
const helpers_1 = require("../utilities/helpers");
const constants_1 = require("../utilities/constants");
const i18next_1 = __importDefault(require("i18next"));
const operations_1 = __importDefault(require("../utilities/operations"));
exports.SumaIntent = {
    canHandle(handlerInput) {
        return helpers_1.IsIntent(handlerInput, constants_1.IntentTypes.SumaIntent);
    },
    handle(handlerInput) {
        const speechText = i18next_1.default.t(constants_1.Strings.HELLO_MSG);
        // @ts-ignore: intent exist
        let slots = helpers_1.GetSlotValues(handlerInput.requestEnvelope.request.intent.slots);
        console.log("Slots: " + JSON.stringify(slots));
        let firstOperand = slots['FirstOperator'];
        let secondOperator = slots['SecondOperator'];
        console.log("First: " + JSON.stringify(firstOperand));
        console.log("Second: " + JSON.stringify(secondOperator));
        let result = operations_1.default.add(+firstOperand.value, +secondOperator.value);
        console.log("Result: " + result);
        return handlerInput.responseBuilder
            .speak("El resultado es " + result)
            .withSimpleCard(i18next_1.default.t(constants_1.Strings.SKILL_NAME), speechText)
            .getResponse();
    },
};
//# sourceMappingURL=SumaIntent.js.map