const readline = require("readline");

console.log("start");
cli();

const data = [];
const dataString = [];
const dataNumber = [];

const sort = [];
const sortNumberMin = [];
const sortNumberMax = [];
const sortLengthMin = [];
const sortUnique = [];
const sortData = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let step = 1;

function cli() {
  const message = step === 1 ? "Увведіть данні " : "Як фільтрувати данні? ";

  rl.question(message, (answer) => {
    if (!answer.length) {
      console.log("Рядок пустий");
      return cli();
    }

    if (step === 1) {
      newData(answer);
    } else {
      switch (answer) {
        case "exit":
          dataSort();
          break;

        case 1:
          newData(answer);
          break;

        case "sort":
          dataSort();
          break;

        case "1":
          dataSortNumberMin();
          break;

        case "2":
          dataSortNumberMax();
          break;

        case "sort 1":
          dataSortLengthMin();
          break;

        case "unique word":
          uniqueWord();
          break;

        case "unique":
          unique();
          break;

        default:
          console.log("Такої команди не існує");
      }
    }

    cli();
  });
}

function unique() {
  if (sortData.length) {
    console.log(sortData);
    return;
  }

  const dataSort = data.filter((el, i, arr) => arr.indexOf(el) === i);
  sortData.push(...dataSort);

  console.log(sortData);
}

function uniqueWord() {
  if (sortUnique.length) {
    console.log(sortUnique);
    return;
  }

  const sortData = dataString.filter((el, i, arr) => arr.indexOf(el) === i);
  sortUnique.push(...sortData);

  console.log(sortUnique);
}

function dataSortLengthMin() {
  if (sortLengthMin.length) {
    console.log(sortLengthMin);
    return;
  }

  const sortData = [...dataString].sort((a, b) => a.length - b.length);

  sortLengthMin.push(...sortData);

  console.log(sortLengthMin);
}

function dataSortNumberMax() {
  if (sortNumberMax.length) {
    console.log(sort);
    return;
  }

  const sortData = [...dataNumber].sort((a, b) => b - a);

  sortNumberMax.push(...sortData);

  console.log(sortNumberMax);
}

function dataSortNumberMin() {
  if (sortNumberMin.length) {
    console.log(sortNumberMin);
    return;
  }

  const sortData = [...dataNumber].sort((a, b) => a - b);

  sortNumberMin.push(...sortData);

  console.log(sortNumberMin);
}

function dataSort() {
  if (sort.length) {
    console.log(sort);
    return;
  }

  const sortData = [...dataString].sort((a, b) => a.localeCompare(b));

  sort.push(...sortData);

  console.log(sort);
}

function newData(str) {
  step += 10;

  data.push(...str.split(" "));

  data.forEach((el) => {
    const isNumber = Number(el);

    if (isNumber) {
      dataNumber.push(isNumber);
    } else {
      dataString.push(el);
    }
  });
}

// if (data.length || step !== 1) {
//   return cli();
// }

// if (answer === "exit") process.exit();

// if (answer === "sort") dataSort();
// if (answer === "1") dataSortNumberMin();
// if (answer === "2") dataSortNumberMax();
// if (answer === "sort 1") dataSortLengthMin();
// if (answer === "unique word") uniqueWord();
// if (answer === "unique") unique();

// HTML JS DATA JS 1 55 449 2 4 REACT 46 NEST.JS EXPRESS NEXT.JS 134 33 CSS SCSS
