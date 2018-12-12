var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');

var textToSpeech = new TextToSpeechV1({
  iam_apikey: 'sh0Pn-W0oQOU8Flni61ddEqHdYPZV5hXsDqojr8BWgur',
  url: 'https://gateway-wdc.watsonplatform.net/text-to-speech/api'
});

textToSpeech.listVoices(null, function(error, voices) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.stringify(voices, null, 2));
  }
});



/*
{
  "voices": [
    {
      "name": "it-IT_FrancescaVoice",
      "language": "it-IT",
      "customizable": true,
      "gender": "female",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/it-IT_FrancescaVoice",
      "supported_features": {
        "voice_transformation": false,
        "custom_pronunciation": true
      },
      "description": "Francesca: Italian (italiano) female voice."
    },
    {
      "name": "es-ES_EnriqueVoice",
      "language": "es-ES",
      "customizable": true,
      "gender": "male",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/es-ES_EnriqueVoice",
      "supported_features": {
        "voice_transformation": false,
        "custom_pronunciation": true
      },
      "description": "Enrique: Castilian Spanish (español castellano) male voice."
    },
    {
      "name": "de-DE_DieterVoice",
      "language": "de-DE",
      "customizable": true,
      "gender": "male",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/de-DE_DieterVoice",
      "supported_features": {
        "voice_transformation": false,
        "custom_pronunciation": true
      },
      "description": "Dieter: Standard German of Germany (Standarddeutsch) male voice."
    },
    {
      "name": "en-US_MichaelVoice",
      "language": "en-US",
      "customizable": true,
      "gender": "male",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/en-US_MichaelVoice",
      "supported_features": {
        "voice_transformation": true,
        "custom_pronunciation": true
      },
      "description": "Michael: American English male voice."
    },
    {
      "name": "en-GB_KateVoice",
      "language": "en-GB",
      "customizable": true,
      "gender": "female",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/en-GB_KateVoice",
      "supported_features": {
        "voice_transformation": false,
        "custom_pronunciation": true
      },
      "description": "Kate: British English female voice."
    },
    {
      "name": "es-LA_SofiaVoice",
      "language": "es-LA",
      "customizable": true,
      "gender": "female",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/es-LA_SofiaVoice",
      "supported_features": {
        "voice_transformation": false,
        "custom_pronunciation": true
      },
      "description": "Sofia: Latin American Spanish (español latinoamericano) female voice."
    },
    {
      "name": "es-US_SofiaVoice",
      "language": "es-US",
      "customizable": true,
      "gender": "female",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/es-US_SofiaVoice",
      "supported_features": {
        "voice_transformation": false,
        "custom_pronunciation": true
      },
      "description": "Sofia: North American Spanish (español norteamericano) female voice."
    },
    {
      "name": "de-DE_BirgitVoice",
      "language": "de-DE",
      "customizable": true,
      "gender": "female",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/de-DE_BirgitVoice",
      "supported_features": {
        "voice_transformation": false,
        "custom_pronunciation": true
      },
      "description": "Birgit: Standard German of Germany (Standarddeutsch) female voice."
    },
    {
      "name": "fr-FR_ReneeVoice",
      "language": "fr-FR",
      "customizable": true,
      "gender": "female",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/fr-FR_ReneeVoice",
      "supported_features": {
        "voice_transformation": false,
        "custom_pronunciation": true
      },
      "description": "Renee: French (français) female voice."
    },
    {
      "name": "pt-BR_IsabelaVoice",
      "language": "pt-BR",
      "customizable": true,
      "gender": "female",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/pt-BR_IsabelaVoice",
      "supported_features": {
        "voice_transformation": false,
        "custom_pronunciation": true
      },
      "description": "Isabela: Brazilian Portuguese (português brasileiro) female voice."
    },
    {
      "name": "en-US_AllisonVoice",
      "language": "en-US",
      "customizable": true,
      "gender": "female",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/en-US_AllisonVoice",
      "supported_features": {
        "voice_transformation": true,
        "custom_pronunciation": true
      },
      "description": "Allison: American English female voice."
    },
    {
      "name": "es-ES_LauraVoice",
      "language": "es-ES",
      "customizable": true,
      "gender": "female",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/es-ES_LauraVoice",
      "supported_features": {
        "voice_transformation": false,
        "custom_pronunciation": true
      },
      "description": "Laura: Castilian Spanish (español castellano) female voice."
    },
    {
      "name": "ja-JP_EmiVoice",
      "language": "ja-JP",
      "customizable": true,
      "gender": "female",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/ja-JP_EmiVoice",
      "supported_features": {
        "voice_transformation": false,
        "custom_pronunciation": true
      },
      "description": "Emi: Japanese (日本語) female voice."
    },
    {
      "name": "en-US_LisaVoice",
      "language": "en-US",
      "customizable": true,
      "gender": "female",
      "url": "https://gateway-wdc.watsonplatform.net/text-to-speech/api/v1/voices/en-US_LisaVoice",
      "supported_features": {
        "voice_transformation": true,
        "custom_pronunciation": true
      },
      "description": "Lisa: American English female voice."
    }
  ]
}
*/
