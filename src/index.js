function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "8de6bde1fb33f748c69f49c1d9ee5f10";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Zurich&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
