var TJBot = require('tjbot');
var config = require('../../config.default');
var targetVoice = 'en-US';
var targetGender = 'male';

// obtain our credentials from config.js
var credentials = config.credentials;

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ['speaker'];

// set up TJBot's configuration
var tjConfig = {
    log: {
        level: 'debug'
    },
    robot: {
	name: 'Bender'
    }
};

// instantiate our TJBot!
var bender = new TJBot(hardware, tjConfig, credentials);

var msg = "Bite my shiny metal ass";

bender.speak(msg);

