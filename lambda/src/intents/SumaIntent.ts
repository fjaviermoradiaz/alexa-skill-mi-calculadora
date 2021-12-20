import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { GetSlotValues, IsIntent } from '../utilities/helpers';
import { IntentTypes, Strings } from '../utilities/constants';
import i18n from 'i18next';
import { Slot } from 'ask-sdk-model';
import SimpleOperations from '../utilities/operations';

export const SumaIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsIntent(handlerInput, IntentTypes.SumaIntent);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = i18n.t(Strings.HELLO_MSG);

    // @ts-ignore: intent exist
    let slots = GetSlotValues(handlerInput.requestEnvelope.request.intent.slots);
    console.log("Slots: " + JSON.stringify(slots))
    
    let firstOperand:Slot = slots['FirstOperator'];
    let secondOperator:Slot = slots['SecondOperator'];
    console.log("First: " + JSON.stringify(firstOperand))
    console.log("Second: " + JSON.stringify(secondOperator))
    let result:number = SimpleOperations.add(+firstOperand.value, +secondOperator.value);
    console.log("Result: " + result)
    return handlerInput.responseBuilder
      .speak("El resultado es " + result)
      .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
      .getResponse();
  },
};
