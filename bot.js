// Testing Exmaple

const TelegramBot = require('node-telegram-bot-api');
const token = '5371616713:AAHEIGIg8eoxKXs66GJfK3xfcMFKTargGxs';
const bot = new TelegramBot(token, {polling: true});

// YOUR CODE STARTS HERE

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
  "Hey, I'm a brand new Telegram bot. I live inside a Sanity tutorial.");
  });

