const apiKey = "fb001b737126ab7be35c22f4867427ce";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.getElementById('search');
const subBtn = document.getElementById('subBtn');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.getElementById('location').innerHTML=data.name;
    document.getElementById('temp').innerHTML= Math.round(data.main.temp) + '°c';
    document.getElementById('tempMax').innerHTML=data.main.temp_max + '°c';
    document.getElementById('tempMin').innerHTML=data.main.temp_min + '°c';
    document.getElementById('humadity').innerHTML=data.main.humidity + '%';
    document.getElementById('wind').innerHTML=data.wind.speed + '%';
};
subBtn.addEventListener('click', ()=>{
    checkWeather(search.value);
});
