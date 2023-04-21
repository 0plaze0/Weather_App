export const getDataFromSearch = () => {
  const searchBar = document.getElementById("search__bar");
  const properText = toProperText(searchBar.value);
  return properText;
};
const toProperText = (text) => {
  const improperText = text;
  const properText = text[0].toUpperCase() + text.slice(1).toLowerCase();
  return properText;
};

// Dom Element

export const DisplayDataInApp = (weatherObj) => {
  const main = document.getElementById("main");
  const footer = document.getElementById("footer");
  // console.log(main);

  //temp data
  clearDisplay(main);
  const temp = createElem("div", "temp");
  const tempValue = createElem("h1");
  const unit = createElem("p");
  content(tempValue, `${Math.round(weatherObj.temp) || "0"}°`);
  content(unit, "C");
  const Location = createElem("div", "location");
  const LocationText = createElem("p");
  content(LocationText, weatherObj.location);

  const icon = createElem("div", "weather-icon");
  const iClass = transformWeatherIcon(weatherObj.icon);

  addChild(Location, LocationText);
  addChild(temp, tempValue, unit);
  addChild(main, temp, Location);

  //footer data
  clearDisplay(footer);
  const humidity = createElem("div", "humdity");
  const humidityValue = createElem("h2");
  const humidityText = createElem("p");
  content(humidityValue, `${weatherObj.humidity || "0"} %`);
  content(humidityText, "Humidity");
  addChild(humidity, humidityValue, humidityText);

  const wind = createElem("div", "wind");
  const windValue = createElem("h2");
  const windText = createElem("p");
  content(windValue, `${weatherObj.wind || "0"} m/s`);
  content(windText, "wind-speed");
  addChild(wind, windValue, windText);

  addChild(footer, humidity, wind);
};
/* 
<footer id="footer">
        <div class="humidity" id="humidity">
          <h2>58%</h2>
          <p>humidity</p>
        </div>
        <div class="wind" id="wind">
          <h2>52mph</h2>
          <p>wind-speed</p>
        </div>
      </footer>
*/

const createElem = (tag, className) => {
  const Elem = document.createElement(tag);
  if (className) {
    Elem.classList.add(className);
  }
  return Elem;
};

const content = (elem, text) => {
  elem.textContent = text;
};

function addChild(value, ...args) {
  return args.forEach((args) => {
    value.appendChild(args);
  });
}

const clearDisplay = (tag) => {
  let lastChild = tag.lastElementChild;
  while (lastChild) {
    tag.removeChild(lastChild);
    lastChild = tag.lastElementChild;
  }
};

const transformWeatherIcon = (icon) => {
  console.log(icon);
};

// const div = document.createElement("div");
// const h1 = document.createElement("h1");
// const p = document.createElement("p");
// h1.textContent = "hello";
// p.textContent = "no";
// div.appendChild(h1);
// div.appendChild(p);
// div.classList.add("temp");
// main.appendChild(div);
// main.appendChild(div);
