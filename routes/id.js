const MongoClient = require('mongodb').MongoClient;
const db = require("../config/db");

module.exports = function (app, db) {
    app.get('/id', function (req, res) {
        var id = Math.random().toString().slice(2, 6);
        console.log(id);
        const insert = {
            id: id,
        }
        db.collection('user').insert(insert, function (err, result) {
            if (err) {
                res.send("error");
            } else {
                res.end(id);
            }
        })
    });
};
