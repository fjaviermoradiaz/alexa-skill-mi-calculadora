import { RequestHandler, HandlerInput } from 'ask-sdk-core';
import { GetSlotValues, IsIntent } from '../utilities/helpers';
import { IntentTypes, Strings } from '../utilities/constants';
import i18n from 'i18next';

export const DivideIntent: RequestHandler = {
  canHandle(handlerInput: HandlerInput) {
    return IsIntent(handlerInput, IntentTypes.DivideIntent);
  },
  handle(handlerInput: HandlerInput) {
    const speechText = i18n.t(Strings.HELLO_MSG);
    //let slots = GetSlotValues(handlerInput.requestEnvelope.request.intent.slots);
    
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(i18n.t(Strings.SKILL_NAME), speechText)
      .getResponse();
  },
};
