const {
  Markup
} = require('telegraf');
const {
  bot
} = require('../core/bot');

bot.command('inline', ctx => {

  // const keyboard = Markup.inlineKeyboard([
  //   [Markup.keyboard('Tester', 'inline')]
  // ])

  ctx.telegram.sendMessage(ctx.chat.id, "Test btn", {
    reply_markup: {
      inline_keyboard: [
        [{
          text: "Testing",
          callback_data: "inline"
        }]
      ]
    }
    // reply_markup: {
    //   keyboard: [
    //     [{
    //         text: "Credits"
    //       },
    //       {
    //         text: "API"
    //       },
    //     ]
    //   ],
    //   resize_keyboard: true,
    //   one_time_keyboard: true
    // }
  }).then()
});

bot.action('inline', async ctx => {
  ctx.editMessageText(
    'Tested'
  ).then();
});