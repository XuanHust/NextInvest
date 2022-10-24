export const objectToSortQuery = (sortObj: any) => {
  if (!sortObj) return undefined;
  let result = "";
  for (let [key, value] of Object.entries(sortObj)) {
    result += key;
    if (value === "desc") {
      result += `:${value}`;
    }
    result += `,`;
  }
  return result.slice(0, -1);
}