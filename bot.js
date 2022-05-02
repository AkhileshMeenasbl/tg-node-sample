// Testing Exmaple
import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import { Crypto } from '@peculiar/webcrypto';
 
const app = express()
const port = 80
const crypto = new Crypto();
 
const BOT_API_URL = "https://api.telegram.org/bot";
const APP_BASE_URL = "https://tg-node-sample.herokuapp.com/"; // Used to tell bot what page to open

// App logic
 
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static('public'));

// Testing Exmaple


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
          { text: "Yes", web_app: { url: APP_BASE_URL + "simple.html" } },
        ],
      ],
    },
  });
});