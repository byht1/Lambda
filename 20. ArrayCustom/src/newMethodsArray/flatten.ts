interface Array<T> {
  /**
   * Returns the last element matching the given predicate, or null if no such element was found.
   */
  flatten(): T[];
}

Array.prototype.flatten = function () {
  let newArray: any[] = [];

  for (let i = 0; i < this.length; i += 1) {
    const str = this[i].trim();
    for (let j = 0; j < str.length; j++) {
      if (str[j] === " ") continue;
      newArray = [...newArray, str[j]];
    }
  }

  return newArray;
};
