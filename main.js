const searchBar = document.getElementById("search__form");
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchBar = document.getElementById("search__bar");
  console.log(searchBar.value);
});
