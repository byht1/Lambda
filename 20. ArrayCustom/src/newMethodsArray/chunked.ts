interface Array<T> {
  /**
   * Splits this sequence into a sequence of lists each not exceeding the given size.
   * @param {T}  size Max length elements
   */
  chunked(size: number): T[][];
}

Array.prototype.chunked = function (size) {
  const maxElements = Math.ceil(this.length / size);
  const obj: { [key: string]: any[] } = {};

  for (let i = 0; i < this.length; i += 1) {
    const element = this[i];

    for (let j = 0; j < maxElements; j += 1) {
      const name = j.toString();

      if (!obj[name]) {
        obj[name] = [];
      }

      if (obj[name].length < size) {
        obj[name] = [...obj[name], element];
        break;
      }
    }
  }
  return Object.values(obj);
};
