const fs = require('fs');
module.exports = function (app, db) {
    app.get('/info', function (req, res) {
        console.log(__dirname + "/../json/info.json");
        fs.readFile(__dirname + "/../json/info.json", "utf8", function (err, data) {
            res.end(data);
        })
    });
};