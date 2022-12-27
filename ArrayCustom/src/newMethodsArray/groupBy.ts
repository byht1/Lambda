interface Array<T> {
  /**
   * Groups elements of the original sequence by the key returned by the given keySelector function applied to each element and returns a map where each group key is associated with a list of corresponding elements.
   * @param {T}  callback The returned map preserves the entry iteration order of the keys produced from the original sequence.
   */
  groupBy<U>(callback: (value: T, index: number, array: T[]) => string): U;
}

Array.prototype.groupBy = function (callback) {
  const obj: any = {};

  for (let i = 0; i < this.length; i += 1) {
    const key = callback(this[i], i, this);

    if (!obj[key]) {
      obj[key] = [];
    }

    obj[key] = [...obj[key], this[i]];
  }

  for (let i = 0; i < Object.keys(obj).length; i++) {}

  return obj;
};
