const weatherUsingLatLong = () => {
  const request = new XMLHttpRequest();

  request.open("GET", "https://restcountries.eu/rest/v2/all", true);

  request.send();
  let lat;
  let long;

  request.onload = function () {
    let data = JSON.parse(this.response);

    for (const el of data) {
      if (el.name === "India") {
        lat = el.latlng[0];
        long = el.latlng[1];
      }
    }

    const weatherRequest = new XMLHttpRequest();

    weatherRequest.open(
      "GET",
      "http://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        long +
        "&appid=ab9c39c10a5f56de3182c22be7ffe35d",
      true
    );

    weatherRequest.send();

    weatherRequest.onload = function () {
      let weatherData = JSON.parse(this.response);
      console.log(weatherData);
    };
  };
};
weatherUsingLatLong();

const weatherUsingCityName = () => {
  const request = new XMLHttpRequest();

  request.open("GET", "https://restcountries.eu/rest/v2/all", true);

  request.send();
  let cityName;

  request.onload = function () {
    let data = JSON.parse(this.response);

    for (const el of data) {
      if (el.name === "India") {
        cityName = el.capital;
      }
    }

    const weatherRequest = new XMLHttpRequest();

    weatherRequest.open(
      "GET",
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&appid=ab9c39c10a5f56de3182c22be7ffe35d",
      true
    );

    weatherRequest.send();

    weatherRequest.onload = function () {
      let weatherData = JSON.parse(this.response);
      console.log(weatherData);
    };
  };
};
weatherUsingCityName();
