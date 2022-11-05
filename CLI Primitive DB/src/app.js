import inquirer from "inquirer";
import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { nextQuestions, userName, actions, searchName } from "./constCLI/index";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const dbDatePath = path.join(__dirname, "./db/users.txt");

cli();

function cli() {
  return inquirer
    .prompt(userName)
    .then((answers) =>
      answers.Name ? cliNextQuestions(answers.Name) : cliDbDate()
    );
}

async function cliNextQuestions(name) {
  return inquirer.prompt(nextQuestions).then(async (answers) => {
    const newUser = {
      name,
      gender: answers.Gender,
      age: answers.Age,
    };

    const str = JSON.stringify(newUser);

    try {
      await fs.appendFileSync(dbDatePath, `${str}\n`);
    } catch {
      console.log("База данних наразі не доступна спробуйте пізніше");
    } finally {
      return cli();
    }
  });
}

function cliDbDate() {
  return inquirer.prompt(actions).then(async (answers) => {
    const searchName = answers.actions;
    const exit = searchName === "N" || searchName === "No";
    const invalid = exit || searchName === "Y" || searchName === "Yes";

    if (invalid) {
      console.log("Не коректна відповідь видеріть Y (Yes) або N (No)");
      return cliDbDate();
    }

    if (exit) return;

    search();
  });
}

function search() {
  return inquirer.prompt(searchName).then(async (answers) => {
    try {
      const data = await fs
        .readFileSync(dbDatePath, "utf8")
        .split("\n")
        .filter((el) => el !== "")
        .map(JSON.parse);

      const search = data.filter((user) => user.name === answers.searchName);
      const isSearch = search.length
        ? search
        : "Користувача з таким іменем не існує";

      console.log("🚀 ~ isSearch", isSearch);
      return cli();
    } catch {
      console.log("База данних наразі не доступна спробуйте пізніше");
      return search();
    }
  });
}
