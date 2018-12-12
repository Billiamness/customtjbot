var TJBot = require('tjbot');
var toneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var config = require('../../config.default');
var CONFIDENCE_THRESHOLD = 0.5;
var text = "i am very angry and very happy"
    
// obtain our credentials from config.js
var credentials = config.credentials;

// these are the hardware capabilities that TJ needs for this recipe
var hardware = ['led'];

// set up TJBot's configuration
var tjConfig = {
    log: {
        level: 'verbose'
    }
};

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);


// turn the LED off
tj.shine('off');

tj.analyzeTone(text).then(function(toneAnalysis) {
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

function shineForEmotion(emotion) {
console.log(emotion)
    switch (emotion) {
    case "anger":
        tj.shine('red');
        break;
    case 'joy':
        tj.shine('yellow');
        break;
    case 'fear':
        tj.shine('magenta');
        break;
    case 'disgust':
        tj.shine('green');
        break;
    case 'sadness':
        tj.shine('blue');
        break;
    default:
        tj.shine('aqua');
        break;
    }
}
