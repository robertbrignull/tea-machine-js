var express = require('express');
var router = express.Router();
var https = require('https');

const querystring = require('querystring');

router.post('/', function(req, res) {
    if (req.body.token !== process.env.VERIFICATION_TOKEN) {
        res.status(400);
        res.send('Verification token incorrect');
        return;
    }

    const brewingMinutes = parseBrewingMinutes(req.body.text);
    const brewingMillis = brewingMinutes * 60 * 1000;

    setTimeout(sendReminder(req.body.response_url), brewingMillis);

    res.send("Will remind you in " + brewingMinutes + " minutes");
});

function parseBrewingMinutes(text) {
    if (typeof text !== 'undefined' && text !== '')
        return parseInt(text, 10);
    return 3;
}

function sendReminder(responserl) {
    return function () {
        const message = { text: ':tea: Your tea is ready!' };
        request({
            url: responserl,
            method: 'POST',
            body: message,
            json: true
        });
    }
}

module.exports = router;
