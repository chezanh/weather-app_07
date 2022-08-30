//search bar
function citySearch(event) {
  event.preventDefault();
  let searchBar = document.querySelector("#location-input");
  searchBar.innerHTML = searchBar.value;
  let city = document.querySelector("h1");

  if (searchBar.value) {
    city.innerHTML = searchBar.value;
  } else {
    alert(`Please select location`);
  }
  let apiKey = "8de6bde1fb33f748c69f49c1d9ee5f10";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchBar.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

let search = document.querySelector("#weather-input");
search.addEventListener("submit", citySearch);

// converting to Celsius and Fahrenheit

function tempCel(event) {
  event.preventDefault();
  let unitC = document.querySelector("#temperature");
  unitC.innerHTML = "28°";
}

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", tempCel);

function tempF(event) {
  event.preventDefault();
  let unitF = document.querySelector("#temperature");
  unitF.innerHTML = "82°";
}

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", tempF);

// show the Temperature
function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let stadt = response.data.name;
  let h4 = document.querySelector("h4");
  h4.innerHTML = `It is ${temperature}°C in ${stadt}`;
}

// ask for geolocation
