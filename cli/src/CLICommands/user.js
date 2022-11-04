const user = [
  {
    type: "input",
    name: "name",
    message:
      "Увведіть ім'я для вихібу натисніть ENTER (при цьому поле повинне бути пустим) ",
  },

  {
    type: "list",
    name: "Gender",
    message: "Вкажіть свою стать",
    choices: ["чоловіча", "жіночі", "інше"],
    default: "чоловіча",
  },

  {
    type: "input",
    name: "Age",
    message: "Вкажіть свій вік",
  },
];

module.exports = user;
