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
            emoji: [{
                id: 0,
                code: "👍",
                count: 0,
            }, {
                id: 1,
                code: "👎",
                count: 0,
            }, {
                id: 2,
                code: "😂",
                count: 0,
            }, {
                id: 3,
                code: "🙃",
                count: 0,
            }, {
                id: 4,
                code: "💩",
                count: 0,
            }, {
                id: 5,
                code: "🤔",
                count: 0,
            }, {
                id: 6,
                code: "👀",
                count: 0,
            }, {
                id: 7,
                code: "💊",
                count: 0,
            }, {
                id: 8,
                code: "🎉",
                count: 0,
            }, {
                id: 9,
                code: "🚩",
                count: 0,
            },],
            reply: [],
            reply_count: 0,
            emoji_count: 0
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
    var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return date.getFullYear() + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}