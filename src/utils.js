const stringToLocalTime = (string) => {
  // Assure the date is parsed as local time
  const split = string.split(/\D/);
  return new Date(1970, 0, 1, split[3], split[4]);
}

export { stringToLocalTime }