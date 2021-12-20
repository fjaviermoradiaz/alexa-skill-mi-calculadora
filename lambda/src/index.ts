import * as Alexa from 'ask-sdk-core';
import { Launch } from './intents/Launch';
import { Help } from './intents/Help';
import { Stop } from './intents/Stop';
import { Reflector } from './intents/Reflector';
import { Fallback } from './intents/Fallback';
import { HelloWorld } from './intents/HelloWorld';
import { ErrorProcessor } from './errors/ErrorProcessor';
import { SessionEnded } from './intents/SessionEnded';
import { LocalizationRequestInterceptor } from './interceptors/LocalizationRequestInterceptor';
import { SumaIntent } from './intents/SumaIntent';
import { RestaIntent } from './intents/RestaIntent';
import { SqrtIntent } from './intents/SqrtIntent';
import { MultiplicaIntent } from './intents/MultiplicaIntent';
import { DivideIntent } from './intents/DivideIntent';
import { PotenciaIntent } from './intents/PotenciaIntent';

export const handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    // Default intents
    Launch,
    SumaIntent,
    RestaIntent,
    SqrtIntent,
    MultiplicaIntent,
    DivideIntent,
    PotenciaIntent,
    Help,
    Stop,
    SessionEnded,
    Reflector,
    Fallback
  )
  .addErrorHandlers(ErrorProcessor)
  .addRequestInterceptors(LocalizationRequestInterceptor)
  .lambda();
