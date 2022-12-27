interface Array<T> {
  /**
   * Function callback for comparison.
   * @param {T}  callback  Function callback for comparison.
   */
  any(
    callback: (element: T, index: number, array: T[]) => boolean,
  ): boolean;
}

Array.prototype.any = function (callback) {
  for (let i = 0; i < this.length; i += 1) {
    const value = callback(this[i], i, this);

    if (value) return true;
  }
  return false;
};
