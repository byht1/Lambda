interface Array<T> {
  /**
   * Returns a sequence containing only elements matching the given predicate.
   * @param {T} predicate — A function that accepts up to three arguments. The filterNot method calls the predicate function one time for each element in the array.
   */
  filterNot(predicate: (value: T, index: number, array: T[]) => boolean): T[];
}

Array.prototype.filterNot = function (predicate) {
  let newArray: any[] = [];

  for (let i = 0; i < this.length; i += 1) {
    const value = predicate(this[i], i, this);

    if (!value) {
      newArray = [...newArray, this[i]];
    }
  }

  return newArray;
};
