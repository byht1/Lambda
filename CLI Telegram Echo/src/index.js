import axios from "axios";
import TelegramBot from "node-telegram-bot-api";

const URL_PHOTO = "https://picsum.photos/200/300";
const TOKEN = "5705656835:AAHDrUNwtcZw3RNZdAYal4WjOkgJBKkqcgo";

const bot = new TelegramBot(TOKEN, { polling: true });

export const botStart = () => {
  bot.onText(/(.+)/, async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "photo") return messagePhotoPush(chatId);

    messageTextPush(chatId, text);
  });
};

botStart();

async function messageTextPush(id, text) {
  const message = `Ви написали "${text}"`;

  await bot.sendMessage(id, message);
}

async function messagePhotoPush(id) {
  const res = await axios.get(URL_PHOTO);
  const url = "https://i.picsum.photos" + res.request.path;

  await bot.sendPhoto(id, url);
}
