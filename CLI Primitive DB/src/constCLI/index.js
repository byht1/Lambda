export const userName = {
  type: "input",
  name: "Name",
  message:
    "Увведіть ім'я для вихібу натисніть ENTER (при цьому поле повинне бути пустим) ",
};

export const nextQuestions = [
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

export const actions = [
  {
    type: "input",
    name: "actions",
    message: "Знайти користувача в базі данних? (Y/N)",
  },
];

export const searchName = [
  {
    type: "input",
    name: "searchName",
    message: "Увведіть ім'я для пошуку",
  },
];
