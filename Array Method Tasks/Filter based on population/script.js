let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

request.send();

request.onload = function () {
  let data = JSON.parse(this.response);
  console.log(data)
  let belowTwoLakhPopulation = data.filter(country => country.population < 200000)

  console.log(belowTwoLakhPopulation)
};
