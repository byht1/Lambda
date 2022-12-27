interface Array<T> {
  /**
   * Returns a sequence containing only elements from the given sequence having distinct keys returned by the given selector function.
   * @param {T}  callback A function that accepts an array element and returns what it should be
   */
  distinctBy(callback: (value: T) => T): T[];
}

Array.prototype.filter;

Array.prototype.distinctBy = function (callback) {
  let newArray: any[] = [];

  for (let i = 0; i < this.length; i += 1) {
    const value = callback(this[i]);

    if (value === this[i]) {
      newArray = [...newArray, this[i]];
    }
  }

  return newArray;
};
