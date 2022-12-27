interface Array<T> {
  /**
   * Returns the first element yielding the largest value of the given function or null if there are no elements.
   * @param {T} predicate — A function that returns an element for comparison.
   */
  maxBy(
    callback?: (value: T, index: number, array: T[]) => number
  ): number | null;
}

Array.prototype.maxBy = function (callback) {
  let maxElementsForNumber: number | null = null;

  for (let i = 0; i < this.length; i += 1) {
    let value;
    if (callback) {
      value = callback(this[i], i, this);
    } else {
      value = this[i];
    }

    const isValid =
      typeof value === "number" &&
      (maxElementsForNumber === null || value > maxElementsForNumber);

    if (isValid) {
      maxElementsForNumber = value;
    }
  }

  return maxElementsForNumber;
};
