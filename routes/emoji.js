const MongoClient = require('mongodb').MongoClient;
const db = require("../config/db");

module.exports = function (app, db) {
    app.post('/emoji', function (req, res) {
        var data = req.body;
        var value = data.value;
        var id = data.postId;
        var emoji = data.emojiId;
        value = parseInt(value);
        id = parseInt(id);
        emoji = parseInt(emoji);

        db.collection('post').updateOne({ "id": id, "emoji.id": emoji }, { $inc: { "emoji.$.count": value } });

        db.collection('post').update({ "id": data.postId }, { $inc: { "emoji_count": value } })

        res.end("ok");

    })

}