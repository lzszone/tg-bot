const Bot = require('telegraf');
const token = '463770035:AAE1Bf-MIRP4uMk7uYQjZa-B8N6Vhdjv5wg';

const bot = new Bot(token);

bot.on('channel_post', ctx => {
  const {text, chat} = ctx.update.channel_post;
  const {username} = chat;
  const token = text.match(/\$(.*)/);
  ctx.reply(`heyyy, ${username}, your token is ${_id}`)
})

module.exports = bot