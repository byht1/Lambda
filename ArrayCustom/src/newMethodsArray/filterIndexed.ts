interface Array<T> {
  /**
   * Returns a sequence containing only elements matching the given predicate.
   * @param {T}  callback Function that takes an element and an index of the element and returns the result of evaluating the predicate for the element.
   */
  filterIndexed(callback: (value: T, index: number) => boolean): T[];
}

Array.prototype.filterIndexed = function (callback) {
  let newArray: any[] = [];

  for (let i = 0; i < this.length; i += 1) {
    const value = callback(this[i], i);

    if (value) {
      newArray = [...newArray, this[i]];
    }
  }

  return newArray;
};
