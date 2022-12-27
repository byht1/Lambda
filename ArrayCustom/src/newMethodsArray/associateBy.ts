interface Array<T> {
  /**
   * Returns a Map containing the elements from the given sequence indexed by the key returned from keySelector function applied to each element.
   * @param {T}  callback  A callback function that returns a value that must be unique in the array
   */
  associateBy(
    callback?: (value: T, index: number, array: T[]) => string | number,
  ): T[];
}

Array.prototype.associateBy = function (callback) {
  let newArr: any[] = [];

  const isOne = (value: any): boolean => {
    for (let i = 0; i < newArr.length; i+= 1) {
      if (callback) {
        if (callback(newArr[i], i, newArr) === value) return false;
        continue;
      }

      if (newArr[i] === value) return false;
    }

    return true;
  };

  for (let i = 0; i < this.length; i+= 1) {
    if (callback) {
      const value = callback(this[i], i, this);

      if (isOne(value)) {
        newArr = [...newArr, this[i]];
      }
      continue;
    }

    const value = isOne(this[i]);

    if (value) {
      newArr = [...newArr, this[i]];
    }
  }

  return newArr;
};
