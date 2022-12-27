interface Array<T> {
  /**
   * Returns the last element matching the given predicate, or null if no such element was found.
   * @param {T} predicate — find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns null.
   */
  findLast(
    predicate: (value: T, index: number, array: T[]) => boolean
  ): T | null;
}


Array.prototype.findLast = function (predicate) {
  for (let i = this.length; i >= 0; i -= 1) {
    const elmNumber = i - 1;
    const value = predicate(this[elmNumber], i, this);

    if (value) {
      return this[elmNumber];
    }
  }

  return null;
};
