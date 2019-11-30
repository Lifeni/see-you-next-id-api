var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/', function (req, res) {
    fs.readFile(__dirname + "/../json/" + req.query.node + ".json", "utf8", function (err, data) {
        res.end(data);
    })
});

module.exports = router;
