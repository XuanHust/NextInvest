export const isSuccess = (status: string | undefined) => {
  return status === "success";
}

export function arrayMoveMutable(array: Array<any>, fromIndex: number, toIndex: number) {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

    const [item] = array.splice(fromIndex, 1);
    array.splice(endIndex, 0, item);
  }
}

export function arrayMoveImmutable(array: Array<any>, fromIndex: number, toIndex: number) {
  const newArray = [...array];
  arrayMoveMutable(newArray, fromIndex, toIndex);
  return newArray;
}

export function isDateString(value: string) {
  return !!Date.parse(value);
}

export function stringTrim(dataString: string) {
  return dataString.replace(/\s+/g, ' ').trim();
}

export function priceTrim(dataString: string) {
  return +dataString.replace(/\./g, "");
}