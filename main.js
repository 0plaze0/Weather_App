const div = document.getElementById("search");
div.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = document.getElementById("write");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=be43bb35b1dde85b62d0f3f123cb751f`;
  const getJson = await fetch(url);
  const getObj = getJson.json();
  getObj.then((data) => console.log(data));
});
