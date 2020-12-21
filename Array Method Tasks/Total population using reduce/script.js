let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

request.send();

request.onload = function () {
  let data = JSON.parse(this.response);
  // console.log(data)
  let totalPopulation = data.reduce((previousResult,country) => {
    return previousResult + country.population
  },0)

  console.log(totalPopulation)
 

  
};
