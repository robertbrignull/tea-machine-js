var express = require('express');
var router = express.Router();

const querystring = require('querystring');

router.get('/', function(req, res) {
    parseBody(req, res, function (body) {
        if (body.token !== process.env.VERIFICATION_TOKEN) {
            res.status(400);
            res.send('Verification token incorrect');
            return;
        }

        const brewingMinutes = parseBrewingMinutes(body.text);

        res.send("Will remind you in " + brewingMinutes + " minutes");
    })
});

function parseBody(req, res, callback) {
    var rawBody = '';
    req.on('data', function (data) {
        rawBody += data;
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (rawBody.length > 1e6) {
            // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
            req.connection.destroy();
            res.status(413);
        }
    });
    req.on('end', function () {
        callback(querystring.parse(rawBody));
    });
}

function parseBrewingMinutes(text) {
    if (typeof text !== 'undefined' && text !== '')
        return parseInt(text, 10);
    return 3;
}

module.exports = router;
