const TelegramBot = require("node-telegram-bot-api");

const token = "5705656835:AAHDrUNwtcZw3RNZdAYal4WjOkgJBKkqcgo";

const bot = new TelegramBot(token, { polling: true });

let chatId = 589391825;

const messagePush = async (str) => {
  try {
    await bot.sendMessage(chatId, str);
  } catch {
    console.error("Сталася помилка спробуйте пізніше");
  } finally {
    process.exit();
  }
};
const photoPush = async (url) => {
  try {
    await bot.sendPhoto(chatId, url);
  } catch {
    console.error("Сталася помилка спробуйте пізніше");
  } finally {
    process.exit();
  }
};

module.exports = {
  photoPush,
  messagePush,
};
