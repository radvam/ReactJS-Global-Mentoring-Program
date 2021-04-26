export const transformArrayToString = (array: string[]): string => {
  return array.reduce((str, item, i) => {
    if (i === 0) {
      str += item;
    } else {
      str += `, ${item}`;
    }

    return str;
  }, "");
};
