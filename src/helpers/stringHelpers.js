export const capitalizeFirstLetter = (string) => {
  if (string) {
    return string[0].toUpperCase() + string.substring(1);
  }
  return "";
};
