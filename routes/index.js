var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log(233);
});

module.exports = router;
