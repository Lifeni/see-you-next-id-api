var express = require('express');
var fs = require('fs');
var router = express.Router();

router.post('/', function (req, res) {
    var data = req.body;
    console.log("用户：" + data.user);
    console.log("回复的帖子：" + data.postId);
    console.log("帖子：" + data.postName);
    console.log("内容：\n" + data.content);
    res.end("ok");
});

module.exports = router;
