interface Array<T> {
  /**
   * Returns the first element matching the given predicate, or null if no such element was found.
   * @param {T} predicate — find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns null.
   */
  find2(predicate: (value: T, index: number, array: T[]) => boolean): T | null;
}

Array.prototype.find2 = function (predicate) {
  for (let i = 0; i < this.length; i += 1) {
    const value = predicate(this[i], i, this);

    if (value) {
      return this[i];
    }
  }

  return null;
};
