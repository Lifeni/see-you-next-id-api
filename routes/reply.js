const MongoClient = require('mongodb').MongoClient;
const db = require("../config/db");

module.exports = function (app, db) {
    app.post('/reply', function (req, res) {
        var data = req.body;
        var time = new Date().getTime();

        const insert = {
            id: time,
            date: getCurrentTime(),
            author: data.user,
            content: data.content,
        }

        console.log("ID：" + time);
        console.log("用户：" + data.user);
        console.log("回复的帖子：" + data.postId);
        console.log("帖子：" + data.postName);
        console.log("内容：\n" + data.content);

        db.collection('post').update({ "id": data.postId }, { $push: { "reply": insert } })

        res.end("ok");

    });
};

function getCurrentTime() {
    var date = new Date();
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + "-" + month + "-" + day + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}