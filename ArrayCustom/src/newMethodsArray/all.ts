interface Array<T> {
  /**
   * Returns true if all elements match the given predicate. Function callback for comparison.
   * @param {T} callback  Function callback for comparison.
   */
  all(callback: (element: T, index: number, array: T[]) => boolean): boolean;
}

Array.prototype.all = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    const value = callback(this[i], i, this);

    if (!value) return false;
  }
  return true;
};
