const Bot = require('telegraf');
const token = '463770035:AAE1Bf-MIRP4uMk7uYQjZa-B8N6Vhdjv5wg';

const bot = new Bot(token);

bot.start((ctx) => {
  console.log('started:', ctx.from.id)
  return ctx.reply('Welcome!')
})

bot.startPolling()