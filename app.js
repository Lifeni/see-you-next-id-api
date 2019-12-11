const express = require('express');
const logger = require('morgan');
const http = require('http');
const https = require('https');
const MongoClient = require('mongodb').MongoClient;
const fs = require('fs');
const db = require('./config/db');
const app = express();

var options = {
    key: fs.readFileSync('./cert/3166108_api.lifeni.top.key'),
    cert: fs.readFileSync('./cert/3166108_api.lifeni.top.pem')
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('X-Powered-By', 'nodejs');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

MongoClient.connect(db.url, { useUnifiedTopology: true }, function (err, database) {
    if (err) return console.log(err);
    const dd = database.db("see-you-next-id-api");
    require('./routes')(app, dd);
    http.createServer(app).listen(80);
    https.createServer(options, app).listen(443);
})


module.exports = app;
