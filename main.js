import { getDataFromSearch } from "./script/domFunction.js";

const initApp = () => {
  const searchBar = document.getElementById("search__form");
  searchBar.addEventListener("submit", getDataFromUser);
};

const getDataFromUser = (event) => {
  event.preventDefault();
  const location = getDataFromSearch();
  return location;
};
initApp();
