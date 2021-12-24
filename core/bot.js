const {
  Telegraf
} = require('telegraf');

// const token = process.env.BOT_TOKEN;

const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.start(ctx => ctx.reply('Salom'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))

// bot.start((ctx) => ctx.reply('Welcome'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))

// bot.command('oldschool', (ctx) => ctx.reply('Hello'))
// bot.command('hipster', Telegraf.reply('λ'))

bot.launch().then();

module.exports = {
  bot
}