var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  if (typeof req.query.code !== 'undefined') {
      res.render('success', {});
      return;
  }

  res.render('addToSlack', {
      client_id: encodeURIComponent(process.env.CLIENT_ID),
      redirect_uri: encodeURIComponent(process.env.URL)
  });
});

module.exports = router;
