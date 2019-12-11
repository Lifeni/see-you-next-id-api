const MongoClient = require('mongodb').MongoClient;
const db = require("../config/db");

module.exports = function (app, db) {
    app.post('/talk', function (req, res) {
        var data = req.body;
        var time = new Date().getTime();

        console.log("ID：" + time);
        console.log("用户：" + data.user);
        console.log("节点：" + data.node);
        console.log("标题：" + data.title);
        console.log("内容：\n" + data.content);

        const insert = {
            id: time,
            node: data.node,
            date: getCurrentTime(),
            title: data.title,
            author: data.user,
            content: data.content,
            emoji: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            reply: []
        }
        db.collection('post').insert(insert, function (err, result) {
            if (err) {
                res.send("error");
            } else {
                res.end("ok");
            }
        })

    });
};

function getCurrentTime() {
    var date = new Date();
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + "-" + month + "-" + day + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}