const {
  Markup
} = require('telegraf');

const keyboards = {
  "start": Markup.inlineKeyboard(Markup.button.callback("Komandalar", "help "))
}

module.exports = {
  keyboards
}