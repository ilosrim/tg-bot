const {
  Composer
} = require('telegraf');
const {
  bot
} = require('../core/bot');
const {
  message
} = require('../lib/message');
const {
  keyboards
} = require('../lib/keyboard');

const composer = new Composer();

composer.start(ctx => ctx.replyWithHTML(message["start"], {
  reply_markup: keyboards["start"]
}).then());

composer.action("help", ctx => {
  ctx.editedMessage(message["help"]).then()
})

bot.use(composer.middleware());