interface Array<T> {
  /**
   * Accumulates value starting with initial value and applying operation from left to right to current accumulator value and each element.
   * @param {T} accumulator — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
   * @param {T} callback — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
   */
  fold<U>(
    accumulator: U,
    callback: (accumulator: U, value: T, index: number, array: T[]) => U
  ): U;
}

Array.prototype.reduce;

Array.prototype.fold = function (accumulator, callback) {
  let acc = accumulator;

  for (let i = 0; i < this.length; i += 1) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};
