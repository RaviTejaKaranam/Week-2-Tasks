let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

request.send();

request.onload = function () {
  let data = JSON.parse(this.response);
  console.log(data)
  let asianCountries = data.filter(country => country.region === "Asia")

  console.log(asianCountries)
};
