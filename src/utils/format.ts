export const formatNumber = (number: number) => {
  return Intl.NumberFormat('de-DE').format(number); //300000 => 300.000
}

export const dateTimeFormat = (dt: any, fullTime?: boolean) => {
  const date = new Date(dt);
  let dateStr =
    date.getDate().toString().padStart(2, '0') +
    "/" +
    date.getMonth().toString().padStart(2, '0') +
    "/" +
    date.getFullYear().toString();

  if (fullTime) {
    dateStr += " " +
      date.getHours().toString().padStart(2, '0') +
      ":" +
      date.getMinutes().toString().padStart(2, '0') +
      ":" +
      date.getSeconds().toString().padStart(2, '0');
  }

  return dateStr;
}