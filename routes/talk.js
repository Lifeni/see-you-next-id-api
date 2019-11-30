var express = require('express');
var fs = require('fs');
var router = express.Router();

router.post('/', function (req, res) {
    var data = req.body;
    console.log("用户：" + data.user);
    console.log("节点：" + data.node);
    console.log("标题：" + data.title);
    console.log("内容：\n" + data.content);
    res.end("ok");
});

module.exports = router;
