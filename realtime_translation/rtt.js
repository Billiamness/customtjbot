var TJBot = require('tjbot');
var config = require('../../config.default');
var targetVoice = 'es-ES';
var targetGender = 'female';

// obtain our credentials from config.js
var credentials = config.credentials;

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ['led', 'microphone', 'speaker', 'servo'];

// set up TJBot's configuration
var tjConfig = {
    log: {
        level: 'verbose'
    },
    robot: {
	name: 'Bender',
	gender: targetGender
    },
    speak: {
	    language: targetVoice
	}
};

// instantiate our TJBot!
var bender = new TJBot(hardware, tjConfig, credentials);


// listen for speech
bender.listen(function(msg) {
	console.log();
	var text = msg.toLowerCase();
	bender.pauseListening();
	
	bender.shine('off');

bender.identifyLanguage(text).then(function(languages) {
	//var sourceLanguage = languages.languages[0].language;
	var sourceLanguage = "en";
	var targetLanguage = "es";

	bender.isTranslatable(sourceLanguage, targetLanguage).then(function(result) {
		if(result) {
			bender.translate(text, sourceLanguage, targetLanguage).then(function(translation){
				console.log(translation.translations[0].translation);
				bender.speak(translation.translations[0].translation);
				bender.analyzeTone(text).then(function(toneAnalysis) {
					console.log(JSON.stringify(toneAnalysis, null, 2));
					if (toneAnalysis.document_tone.tones[0]){
						var emotions = toneAnalysis.document_tone.tones;
						var top = emotions[Object.keys(emotions).reduce(function(a, b) {
							return emotions[a].score > emotions[b].score ? a : b
						})];
						
						shineForEmotion(top.tone_id);
					} else {
						shineForEmotion("default");
					}
				});
			});
		} else {
			console.log("Unable to translate from '"+sourceLanguage+"' to '"+targetLanguage+"'");
		}
	});
});
bender.resumeListening();
});


function shineForEmotion(emotion) {
console.log(emotion)
    switch (emotion) {
    case "anger":
        bender.shine('red');
        break;
    case 'tentative':
        bender.shine('yellow');
        break;
    case 'fear':
        bender.shine('magenta');
        break;
    case 'disgust':
        bender.shine('green');
        break;
    case 'sadness':
        bender.shine('blue');
        break;
    case 'joy':
	tjColors = bender.shineColors();
	for (i = 0; i < 5; i++) {
        setTimeout(function() {
            var randIdx = Math.floor(Math.random() * tjColors.length);
            var randColor = tjColors[randIdx];
            bender.shine(randColor);
	    bender.wave();
        }, i * 250);
    }
    break;
    default:
        bender.shine('aqua');
        break;
    }
}


