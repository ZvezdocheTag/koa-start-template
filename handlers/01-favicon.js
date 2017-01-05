
// Usually served by Nginx
// Плагин сервить запрос за фавикон
const favicon = require('koa-favicon');

exports.init = app => app.use(favicon());
