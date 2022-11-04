const TelegramBot = require("node-telegram-bot-api");

const token = "5705656835:AAHDrUNwtcZw3RNZdAYal4WjOkgJBKkqcgo";

const bot = new TelegramBot(token, { polling: true });

let chatId = 589391825;

const messagePush = (str) => {
  bot.sendMessage(chatId, str);
  bot.stopPolling();
};
const photoPush = async (url) => {
  bot.sendPhoto(chatId, url);
  bot.stopPolling();
};

module.exports = {
  photoPush,
  messagePush,
};

// node index =pc:/Users/asus/Desktop/Папкі/Папкі/images.jpg
