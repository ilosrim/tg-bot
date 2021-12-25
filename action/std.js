const {
  Composer,
  Markup
} = require('telegraf');
const {
  bot
} = require('../core/bot');
const axios = require('axios');
const json = require('../deno.versions.json');
const url = "https://jsonplaceholder.typicode.com/users/1"

const composer = new Composer();

composer.command('std', async ctx => {
  let names = [];
  let keyboards = [];
  let data = await axios.get(json).then(res => {
    return res.data;
  })
  // let data2 = data.map(val => val.name);
  for (let name of data) {
    keyboards.push(
      [Markup.button.url((`${name}`, 'google.com'))]
    )
  }
  ctx.replyWithHTML('Coose name: ', {
    reply_markup: Markup.inlineKeyboard(keyboards)
  }).then();
})

bot.use(composer.middleware());