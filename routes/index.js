const idRouter = require('./id');
const talkRouter = require('./talk');
const infoRouter = require('./info');
const postRouter = require('./post');
const replyRouter = require('./reply');
const emojiRouter = require('./emoji');

module.exports = function (app, db) {
    idRouter(app, db);
    talkRouter(app, db);
    infoRouter(app, db);
    postRouter(app, db);
    replyRouter(app, db);
    emojiRouter(app, db);
};
