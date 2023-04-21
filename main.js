import CurrentLocation from "./currentLocation.js";
import { getDataFromApi } from "./DataFunction.js";
import { getDataFromSearch } from "./script/domFunction.js";

const currentLoc = new CurrentLocation();

const initApp = () => {
  const searchBar = document.getElementById("search__form");
  searchBar.addEventListener("submit", getDataFromUser);
  console.log(currentLoc.location);
  getDataFromApi(currentLoc);
  // DisplayDataInApp();
};

const getDataFromUser = (event) => {
  event.preventDefault();
  const location = getDataFromSearch();
  currentLoc.location = location;
  initApp();
};
initApp();
