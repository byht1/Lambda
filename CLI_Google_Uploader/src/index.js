const fs = require("fs");
const { google } = require("googleapis");
const inquirer = require("inquirer");
const axios = require("axios");

// Я розумію, що по хорошому краше заховати цей токен. Але так як, це всього начання і одна змінна яку варто заховати (на мою думку). Я не став ховати її в файл .env
const TOKEN = "hk4ctD8S0OuM5l95YEZg7iIN4tdZiEBqAF5CVBfpheonjwOnjo9ovZDj0MsC";

const shorten = axios.create({
  baseURL: "https://api.tinyurl.com/",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const KEYFILEPATH = "lofty-apex-368511-338be4cfdc3b.json";
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

let link = null;

async function googleDriveUpload({ name, path, extension }) {
  const driveService = google.drive({ version: "v3", auth });

  const fileMetaData = {
    name: `${name ? name : Date.now()}.${extension}`,
    parents: ["1YXKF2qSowhv3PGuCSeqQcIecUJmL8B6X"],
  };

  const media = {
    mimeType: `image/${extension}`,
    body: fs.createReadStream(path),
  };

  const response = await driveService.files.create({
    resource: fileMetaData,
    media,
  });

  const id = await response.data.id;
  link = `https://drive.google.com/file/d/${id}/view`;

  console.log("🚀 ~ photoLink", link);
}

async function startCLI() {
  const file = {};

  const fileLinkUser = await inquirer.prompt([
    {
      name: "path",
      type: "input",
      message: "Введіть шлях до файла, який ви бажаєте надіслати: ",
    },
  ]);

  const rename = await inquirer.prompt([
    {
      name: "res",
      type: "confirm",
      message: "Хочете змінити початкову назву?",
    },
  ]);

  file.name = await newName(fileLinkUser.path, rename.res);
  file.path = fileLinkUser.path;
  file.extension = file.path.split(".").pop();

  await googleDriveUpload(file);

  const shorten = await inquirer.prompt([
    {
      name: "isTinyLink",
      type: "confirm",
      message: "Хочете скоротити посилання?",
    },
  ]);

  if (shorten.isTinyLink) {
    await tinyLink();
  }

  link = null;

  main();
}

async function newName(filePath, res) {
  if (!res) {
    return filePath.split("/").pop().split(".")[0];
  }

  const newName = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Введіть назву: ",
    },
  ]);

  return newName.name;
}

async function tinyLink() {
  try {
    const { data } = await shorten.post("create", {
      url: link,
      domain: "tiny.one",
    });
    console.log("🚀 ~ shortenLink", data.tiny_url);
  } catch (error) {
    console.log("🚀 ~ Ой сталася помилка спробуйте пізніше");
  }
}

startCLI();
