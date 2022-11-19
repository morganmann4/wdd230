//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?q=Chandler&appid=25253facb291f55352ed60732489335a&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);
    
    document.getElementById('temp').innerHTML=weatherInfo.main.temp;
    document.getElementById('speed').innerHTML=weatherInfo.wind.speed;

    const iconcode = weatherInfo.weather[0].icon;
    const icon_path = "//openweathermap.org/img/w/"+ iconcode + ".png";

    document.getElementById('weather_icon').src = icon_path;

 }); 