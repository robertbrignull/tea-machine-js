var express = require('express');
var router = express.Router();

const querystring = require('querystring');

router.post('/', function(req, res) {
    if (req.body.token !== process.env.VERIFICATION_TOKEN) {
        res.status(400);
        res.send('Verification token incorrect');
        return;
    }

    const brewingMinutes = parseBrewingMinutes(req.body.text);

    res.send("Will remind you in " + brewingMinutes + " minutes");
});

function parseBrewingMinutes(text) {
    if (typeof text !== 'undefined' && text !== '')
        return parseInt(text, 10);
    return 3;
}

module.exports = router;
