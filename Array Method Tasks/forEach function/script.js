let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

request.send();

request.onload = function () {
  let data = JSON.parse(this.response);
  // console.log(data)
  data.forEach(element => {
    console.log(element.name)
    console.log(element.capital)
    console.log(element.flag)
    console.log("******") //Differentiating countries
  });

  
};
