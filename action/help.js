const {
  bot
} = require('../core/bot');

bot.help(ctx => {
  let text = `<b>Botimizda mavjud bo'lgan komandalar:</b> \n` +
    `/start - <code>botni ishga tushiradi</code>\n` +
    `/help - <code>yordam olish mumkin</code>\n` +
    `/author - <a href='t.me/ilosrim'>ilosrim</a>`;
  let commands = `Botimizda mavjud bo'lgan komandalar:
    /start - <code>botni ishga tushiradi</code>
    /help - <code>yordam olish mumkin</code>
    /author - <a href='t.me/ilosrim'>ilosrim</a>`;
  ctx.replyWithHTML(commands).then();
})