interface Array<T> {
  /**
   * Returns a sequence containing only elements matching the given predicate.
   * @param {T} predicate — A function that accepts up to three arguments. The filter2 method calls the predicate function one time for each element in the array.
   */
  countBy(predicate: (value: T, index: number, array: T[]) => number): number;
}

Array.prototype.countBy = function (predicate) {
  let value: number = 0;

  for (let i = 0; i < this.length; i += 1) {
    value += predicate(this[i], i, this);
  }

  return value;
};
