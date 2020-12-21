let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.eu/rest/v2/all", true);

request.send();

request.onload = function () {
  let data = JSON.parse(this.response);
  const countriesWithDollar = data.filter((country) => {
    let currencies = country.currencies;
    for (const el of currencies) {
      if (
        el.name === "United States dollar" ||
        el.name === "United States Dollar"
      ) {
        return country.name;
      }
    }
  });
  console.log(countriesWithDollar);
};
