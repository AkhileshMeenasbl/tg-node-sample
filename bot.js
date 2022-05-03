// Testing Exmaple

const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '5371616713:AAHEIGIg8eoxKXs66GJfK3xfcMFKTargGxs';
const bot = new TelegramBot(TOKEN, {polling: true});

// Variable
const Welcome = "Hi i am Akhil's Bot. make changes"

// YOUR CODE STARTS HERE

bot.onText(/\/start/,(msg) => {
  bot.sendMessage(msg.chat.id, Welcome,
  {
    reply_markup : {
      inline_keyboard : [[
        {
          text : "Orinial ✅",
          web_app : {url : "https://tg-node-sample.herokuapp.com/original"}
        },{
          text : "Testing 🙈",
          web_app : {url : "https://tg-node-sample.herokuapp.com/testing"}
          //web_app : {url : "https://www.careerlauncher.com/upsc/prelims-map-series/"}
        }
        ],[
          {
            text : "Orinial ✅",
            web_app : {url : "https://tg-node-sample.herokuapp.com/mahewa"}
          }
        ]]
    }
  }
  );
});

