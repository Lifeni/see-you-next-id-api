var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function (req, res) {
    var id = Math.random().toString().slice(2, 6);
    console.log(id);

    res.end(id);
});

module.exports = router;
