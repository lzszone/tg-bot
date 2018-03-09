const http = require('http');
const bot = require('./bot');
const web = require('./web');

const server = http.createServer(web).listen(8888);
bot.startPolling();