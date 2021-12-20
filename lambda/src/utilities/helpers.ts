import { HandlerInput } from 'ask-sdk-core';
import { RequestTypes } from './constants';
import { Slots, SlotValues } from './interfaces';

/**
 * Checks if the request matches any of the given intents.
 *
 * @param handlerInput
 * @param intents
 */
export function IsIntent(
  handlerInput: HandlerInput,
  ...intents: string[]
): boolean {
  if (handlerInput.requestEnvelope.request.type === RequestTypes.Intent) {
    for (let i = 0; i < intents.length; i++) {
      if (handlerInput.requestEnvelope.request.intent.name === intents[i]) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Checks if the request matches any of the given types.
 *
 * @param handlerInput
 * @param types
 */
export function IsType(
  handlerInput: HandlerInput,
  ...types: string[]
): boolean {
  for (let i = 0; i < types.length; i++) {
    if (handlerInput.requestEnvelope.request.type === types[i]) {
      return true;
    }
  }
  return false;
}


export function GetSlotValues(filledSlots?: Slots): SlotValues {
  const slotValues: SlotValues = {};

  if (filledSlots) {
      Object.keys(filledSlots).forEach((item) => {
          const name = filledSlots[item].name;
          const value = filledSlots[item].value;
          const confirmationStatus = filledSlots[item].confirmationStatus;

          if (filledSlots[item] &&
              filledSlots[item].resolutions &&
              filledSlots[item].resolutions!.resolutionsPerAuthority &&
              filledSlots[item].resolutions!.resolutionsPerAuthority![0] &&
              filledSlots[item].resolutions!.resolutionsPerAuthority![0].status &&
              filledSlots[item].resolutions!.resolutionsPerAuthority![0].status.code) {
              switch (filledSlots[item].resolutions!.resolutionsPerAuthority![0].status.code) {
                  case "ER_SUCCESS_MATCH":
                      const valueWrappers = filledSlots[item].resolutions!.resolutionsPerAuthority![0].values;

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
          } else {
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