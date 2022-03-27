const stringToLocalTime = (string) => {
  // Assure the date is parsed as local time
  const split = string.split(/:/);
  return new Date(1970, 0, 1, split[0], split[1]);
}

const getNowTime = () => {
  return new Date();
}

export {
  stringToLocalTime,
  getNowTime,
}