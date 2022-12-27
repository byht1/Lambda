interface Array<T> {
  /**
   * Multiplies the mass elements by the specified factor. If the element is a string, it will try to convert it to a number. In all other cases, you will get NaN. Always a full array of numbers or NaN
   * @param {T} value The number by which each element of the array will be multiplied. The default value is 10
   */
  multiply(value?: number): number[];
}

Array.prototype.multiply = function (value: number) {
  const multiply = value ?? 10;

  let newArr: Array<number> = [];

  for (let i = 0; i < this.length; i += 1) {
    // Я так зрозумів що по завданню так робити не пожна
    // newArr.push(Number(this[i]) * multiply);

    newArr = [...newArr, this[i] * multiply];
  }

  return newArr;
};
