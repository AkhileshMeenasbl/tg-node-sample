const TelegramBot = require('node-telegram-bot-api');
const token = '5371616713:AAHEIGIg8eoxKXs66GJfK3xfcMFKTargGxs';
const bot = new TelegramBot(token, {polling: true});

// YOUR CODE STARTS HERE

bot.onText(/\/start/, (msg) => {
// listens for "/start" and responds with the greeting below.
bot.sendMessage(msg.chat.id,
"Hey, I'm a brand new Telegram bot. I live inside a Sanity tutorial.");
});

bot.onText(/^\/test/, async (msg) => {
  bot.sendMessage(msg.from.id, "You want to play?", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "No", callback_data: "No" },
          { text: "Yes", callback_data: "Yes" },
        ],
      ],
    },
  });
});