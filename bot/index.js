const Bot = require('telegraf');
const bot_token = '463770035:AAE1Bf-MIRP4uMk7uYQjZa-B8N6Vhdjv5wg';

const bot = new Bot(bot_token);

bot.on('channel_post', ctx => {
  const {text, chat} = ctx.update.channel_post;
  const {username} = chat;
  const regex = /^\$(.*)/;
  if(regex.test(text)) {
    const token = text.match(regex)[1];
    ctx.reply(`heyyy, ${username}, your token is ${token}`)
  }
})

module.exports = bot