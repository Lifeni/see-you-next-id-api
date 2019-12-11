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
            db.collection('post').find({}).sort({ "id": -1 }).toArray(function (err, result) {
                if (err) {
                    res.send("error");
                } else {
                    res.end(JSON.stringify(result));
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