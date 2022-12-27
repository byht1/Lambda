function addDots(string) {
  const stringLength = string.length;

  if (stringLength === 0) return "string length = 0";

  const newArr = [];

  for (let i = 0; i < 2 ** (stringLength - 1); i += 1) {
    let value = string[0];

    const arrayHelpers = [...i.toString(2).padStart(stringLength - 1, "0")];

    for (let j = 0; j < arrayHelpers.length; j += 1) {
      value += (Number(arrayHelpers[j]) ? "." : "") + string[j + 1];
    }

    newArr.push(value);
  }

  return newArr;
}

console.log(addDots("abcd"));
