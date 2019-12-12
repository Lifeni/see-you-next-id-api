const MongoClient = require('mongodb').MongoClient;
const db = require("../config/db");

module.exports = function (app, db) {
    app.get('/post', function (req, res) {

        if (req.query.node === "all") {
            db.collection('post').find({}).sort({ "id": -1 }).toArray(function (err, result) {
                if (err) {
                    res.send("error");
                } else {
                    res.end(JSON.stringify(result));
                }
            });
        } else if (req.query.node === "hot") {
            var time = new Date().getTime() - 86400000;
            db.collection('post').aggregate([{ "$match": { 'id': { $gte: 100 } } },
            {
                "$project":
                {
                    "id": 1, "node": 1, "title": 1, "author": 1, "date": 1,
                    "content": 1, "emoji": 1, "reply": 1, "reply_count": 1,
                    "emoji_count": 1, "add": { "$add": ["$reply_count", "$emoji_count"] }
                }
            },
            { "$sort": { "add": -1 } }]).toArray(function (err, result) {
                if (err) {
                    res.send("error");
                } else {
                    res.send(result);
                }
            });


        } else {
            db.collection('post').find({ "node": req.query.node }).sort({ "id": -1 }).toArray(function (err, result) {
                if (err) {
                    res.send("error");
                } else {
                    res.end(JSON.stringify(result));
                }
            });
        }

    });
};