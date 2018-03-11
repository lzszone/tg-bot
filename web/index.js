const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const {UserModel} = require('../models');
const pug = require('pug');
const koaBody = require('koa-body');
const uuid = require('uuid/v1');
const {domain} = require('../settings');

const router = new Router();

router
  .get('/', async (ctx, next) => {
    const {inviteToken, lang} = ctx.query;
    ctx.data = {inviteToken, lang};
    ctx.template = __dirname + '/views/index.pug';
    await next()
  })
  .post('/user', async (ctx, next) => {
    const {body, query} = ctx;
    const {inviteToken} = query;
    const {address} = body;
    let user = await UserModel.findOne({address});
    if(!user) {
      let token = uuid().split('-')[0];
      user = new UserModel({
        address,
        token
      });
      async function saveUser(user) {
        try {
          await user.save()
        } catch(e) {
          token = uuid().split('-')[0];
          console.log(token)
          user.token = token;
          await saveUser(user)
        }
      }
      await saveUser(user);
    }
    if(inviteToken) {
      await UserModel.findOneAndUpdate({token: inviteToken}, {$inc: {account: 188}, $push: {invites: inviteToken}});
    }
    const token = user.token;
    ctx.status = 303;
    return ctx.redirect(`/user/${token}`);
  })
  .get('/user/:token', async (ctx, next) => {
    const {token} = ctx.params;
    const {lang} = ctx.query;
    const user = await UserModel.findOne({token})
    if(user) {
      ctx.data = {user, lang, domain};
      ctx.template = __dirname + '/views/user.pug';
      await next()
    } else {
      ctx.status = 301;
      return ctx.redirect('/')
    }
  });

const app = new Koa();

app
  .use(async (ctx, next) => {
    try {
      await next()
    } catch(e) {
      console.log(e)
    }
  })
  .use(serve('views/public'))
  .use(koaBody())
  .use(async (ctx, next) => {
    ctx.body = ctx.request.body;
    await next()
  })
  .use(router.routes())
  .use(async (ctx, next) => {
    const {data} = ctx;
    if(ctx.template)
      ctx.body = pug.renderFile(ctx.template, {data});
    ctx.type = 'html';
    return next()
  });

app.listen(8888);