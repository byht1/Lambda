interface Array<T> {
  /**
   * Returns an average value of elements in the sequence.
   * @param {T}  callback The callback function that returns the value from which you need to get the average value
   */
  average(
    callback?: (value: T, index: number, array: T[]) => number,
  ): number;
}

Array.prototype.average = function (callback) {
  let value = 0;

  for (let i = 0; i < this.length; i += 1) {
    if (callback) {
      value += callback(this[i], i, this);
      continue;
    }
    value += Number(this[i]);
  }
  return value / this.length;
};
