export const getDataFromSearch = () => {
  const searchBar = document.getElementById("search__bar");
  const properText = toProperText(searchBar.value);
  return properText;
};
const toProperText = (text) => {
  const properText = text[0].toUpperCase() + text.slice(1).toLowerCase(0);
  return properText;
};
