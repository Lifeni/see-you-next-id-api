var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('./cert/3166108_api.lifeni.top.key'),
    cert: fs.readFileSync('./cert/3166108_api.lifeni.top.pem')
}

var indexRouter = require('./routes/index');
var idRouter = require('./routes/id');
var talkRouter = require('./routes/talk');
var infoRouter = require('./routes/info');
var postRouter = require('./routes/post');
var replyRouter = require('./routes/reply');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('X-Powered-By', 'nodejs');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.use('/', indexRouter);
app.use('/id', idRouter);
app.use('/talk', talkRouter);
app.use('/info', infoRouter);
app.use('/post', postRouter);
app.use('/reply', replyRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

http.createServer(app).listen(80);
https.createServer(options, app).listen(443);

module.exports = app;
