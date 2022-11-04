const inquirer = require("inquirer");
const { user } = require("./CLICommands");

const cli = () => {
  return inquirer.prompt(user).then((answers) => {
    console.log(answers);

    return cli(user);
  });
};

cli();

console.log(1);
