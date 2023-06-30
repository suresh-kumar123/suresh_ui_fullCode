var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(req);
  console.log("data received");
  console.log(req.body);
  var data = {
    msg: 'Done'
  }

  res.send(JSON.stringify(data));
});

module.exports = router;
