const Bot = require('telegraf');
const bot_token = '463770035:AAE1Bf-MIRP4uMk7uYQjZa-B8N6Vhdjv5wg';
const {UserModel} = require('../models');
const {domain} = require('../settings');

const bot = new Bot(bot_token);

bot.on('message',ctx => {
  const {text, from} = ctx.update.message;
  const {first_name, last_name} = from;
  const regex = /^\/(.*)/;
  if(regex.test(text)) {
    const token = text.match(regex)[1];
    let user;
    return UserModel.findOne({token})
      .then(user => {
        if(user && !user.isActivated) {
          user.account += + 188;
          user.isActivated = true;
          return user.save()
            .then(() => {
              ctx.reply(`Hi, ${first_name} ${last_name}, your code: ${token} is activated successfully, send shared link to your friend right away to get your bonus.\n\n你好，${first_name} ${last_name}, 你的验证码：${token} 已经成功激活，立刻发送分享链接给朋友获得空投奖励！\n\nYour share link (你的分享链接):\n\n${domain}?token=${token}`)
            })
        }
      })
  }
})


bot.startPolling();