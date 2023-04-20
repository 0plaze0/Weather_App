import CurrentLocation from "./currentLocation.js";
import { getDataFromSearch } from "./script/domFunction.js";

const currentLoc = new CurrentLocation();

const initApp = () => {
  const searchBar = document.getElementById("search__form");
  searchBar.addEventListener("submit", getDataFromUser);
};

const getDataFromUser = (event) => {
  event.preventDefault();
  const location = getDataFromSearch();
  currentLoc.location = location;
};
initApp();
