const { Command } = require("commander");
const { messagePush, photoPush } = require("./bot");
const program = new Command();

program
  .name("Telegram-console-sender")
  .description("Send somethig to bot from console");

program
  .command("message")
  .description("Бот відправить повідомлення")
  .argument("<string>", "повідомлення для надсилання")
  .action((str) => {
    messagePush(str);
  });

program
  .command("photo")
  .description("Бот відправить повідомлення photo")
  .argument("<path>", "Шлях до фото або просто перетяніть фото")
  .action((path) => {
    photoPush(path);
  });

program.parse();

// program
//   .option("-m, --message <type>", "choose message")
//   .option("-p, --photo <type>", "choose photo");

// program.parse(process.argv);

// const argv = program.opts();

// function invokeAction({ message, photo }) {
//   if (message) messagePush(message);
//   if (photo) photoPush(photo);
// }

// invokeAction(argv);
