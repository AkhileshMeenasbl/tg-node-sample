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
          text : "Akhil🤣🤣🤣",
          web_app : {url : "https://tg-node-sample.herokuapp.com/app"}
        }
        ]]
    }
  }
  );
});


//bot.onText(/\/start/, (msg) => {
//  bot.sendMessage(msg.chat.id,
//  "Hey, I'm a brand new Telegram bot. I live inside a Sanity tutorial.");
//  {
//    reply_markup : {
//      inline_keyboard : [[
//        {
//          text : "Open Demo 🤣",
//          web_app : {url : "https://webappcontent.telegram.org/demo"}
//        }
//        ]],
//    }
//  }
//  });

