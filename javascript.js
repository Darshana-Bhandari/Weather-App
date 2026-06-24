const apikey="";
const apiurl="https://api.openweathermap.org/data/2.5/weather?q=germany&appid=01224752f6d7948fe5d5c12b31fee4e4&units=metric&q=bangalore";

async function checkWeather(){
    const response=await fetch(apiurl +  '&appid=' + apikey);
}