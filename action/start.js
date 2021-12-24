const {
  bot
} = require('../core/bot');

bot.start(ctx => ctx.replyWithHTML(`Salom ${ctx.from.first_name}`).then());