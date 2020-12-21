// Getting weather by Hard Coding required variables methodq 

const weatherUsingLatLong = () => {
  const request = new XMLHttpRequest();

  request.open(
    "GET",
    "http://api.openweathermap.org/data/2.5/weather?lat=17.69&lon=83.2093&appid=ab9c39c10a5f56de3182c22be7ffe35d",
    true
  );

  request.send();

  request.onload = function () {
    let data = JSON.parse(this.response);
    console.log(data);
  };
};

weatherUsingLatLong();

const weatherUsingCityName = () => {
  const request = new XMLHttpRequest();

  request.open(
    "GET",
    "http://api.openweathermap.org/data/2.5/weather?q=Visakhapatnam&appid=ab9c39c10a5f56de3182c22be7ffe35d",
    true
  );
  request.send();
  request.onload = function () {
    let data = JSON.parse(this.response);
    console.log(data);
  };
};
weatherUsingCityName();
