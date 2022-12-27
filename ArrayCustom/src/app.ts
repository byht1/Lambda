import "./newMethodsArray/multiply";
import "./newMethodsArray/all";
import "./newMethodsArray/any";
import "./newMethodsArray/associateBy";
import "./newMethodsArray/average";
import "./newMethodsArray/chunked";
import "./newMethodsArray/distinctBy";
import "./newMethodsArray/filter";
import "./newMethodsArray/filterIndexed";
import "./newMethodsArray/filterNot";
import "./newMethodsArray/find";
import "./newMethodsArray/findLast";
import "./newMethodsArray/flatten";
import "./newMethodsArray/fold";
import "./newMethodsArray/maxBy";
import "./newMethodsArray/minBy";
import "./newMethodsArray/countBy";
import "./newMethodsArray/groupBy";

const testArray = [1, 2, 3, 4, 5];
const testArray2 = ["Grace Hopper", "Jacob Bernoulli", "Jacob Bernoulli"];
const testArray3 = [
  {
    firstName: "Grace",
    lastName: "Hopper",
    obj: {
      firstName: "Grace",
      lastName: "Hopper",
    },
  },
  {
    firstName: "Jacob",
    lastName: "Hopper",
    obj: {
      firstName: "Jacob",
      lastName: "Hopper",
    },
  },
  {
    firstName: "Jacob",
    lastName: "Bernoulli",
    obj: {
      firstName: "Jacob",
      lastName: "Bernoulli",
    },
  },
];
const testArray4 = [
  { value: 5 },
  { value: 10 },
  { value: 15 },
  { value: 10 },
  { value: 5 },
];
const testArray5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testArray6 = ["A", "b", "v", "V", "B", "c"];
const testArray7 = [0, 1, 2, 3, 4, 8, 6];
const testArray8 = [
  { emoji: "😀", sad: false },
  { emoji: "🥲", sad: true },
  { emoji: "🥲", sad: false },
  { emoji: "🥲", sad: true },
  { emoji: "🥲", sad: false },
  { emoji: "🥲", sad: true },
  { emoji: "🥲", sad: false },
];
const testArray9 = [
  { technology: "HTML", dev: "Vitalik" },
  { technology: "SCSS", dev: "Dima" },
  { technology: "React", dev: "Vlad" },
  { technology: "React", dev: "Tim" },
  { technology: "HTML", dev: "Nik" },
  { technology: "SCSS", dev: "Mike" },
];

type TTest = {
  technology: string;
  dev: string;
};

// const test = testArray.multiply();
// const test = testArray.all(x => x > 0);
// const test = testArray.any((x) => x >= 5);
// const test = testArray3.associateBy((x) => x.obj.firstName);
// const test = testArray2.associateBy();
// const test = testArray4.associateBy();
// const test = testArray5.average();
// const test = testArray5.chunked(3);
// const test = testArray6.distinctBy((x) => x.toLocaleLowerCase());
// const test = testArray5.filter2((x) => !!(x % 2));
// const test = testArray7.filterIndexed((x, i) => x === i);
// const test = testArray5.filterNot((x) => !!(x % 2));
// const test = testArray4.find2((x) => x.value === 10);
// const test = testArray4.findLast((x) => x.value === 10);
// const test = testArray2.flatten();
// const test = testArray5.fold<{ couples: number[]; odd: number[] }>(
//   { couples: [], odd: [] },
//   (acc, x) => {
//     const value = x % 2;

//     value ? acc.odd.push(x) : acc.couples.push(x);

//     return acc;
//   }
// );
// const test = testArray4.maxBy((x) => x.value);
// const test = testArray5.minBy();
// const test = testArray4.countBy((x) => x.value);
const test = testArray9.groupBy<{
  SCSS: TTest[];
  React: TTest[];
  HTML: TTest[];
}>((x) => x.technology);

console.log("🚀  test", test);
