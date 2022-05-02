// Testing Exmaple

const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '5371616713:AAHEIGIg8eoxKXs66GJfK3xfcMFKTargGxs';
//const bot = new TelegramBot(TOKEN, {polling: true});

//Set Web-Hook
//const TelegramBot = require('../..');
const options = {
  webHook: {
    port: process.env.PORT || 8080
    //port: process.env.PORT || 443
  }
};
const url = process.env.APP_URL || 'https://tg-node-sample.herokuapp.com';
const bot = new TelegramBot(TOKEN, options);

// This informs the Telegram servers of the new webhook.
// Note: we do not need to pass in the cert, as it already provided
bot.setWebHook(`${url}/bot${TOKEN}`);

// YOUR CODE STARTS HERE

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id,
  "Hey, I'm a brand new Telegram bot. I live inside a Sanity tutorial.");
  });

