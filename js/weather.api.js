let search = document.getElementById('search');
let cityName = document.getElementById('cityName');
let temperature = document.getElementById('temperature');
let weather = document.getElementById('weather');

const btn = document.getElementById('btn');
btn.addEventListener('click', function (){

    let cityNameUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + search.value + "&units=metric" + "&appid=f62925ad62070148cd890732bc1f1891";
    console.log(cityNameUrl);
    fetch(cityNameUrl)
        .then(result => result.json())
        .then(data => {
            if (data.name !== undefined){
                cityName.innerText = data.name;
                temperature.innerText = data.main.temp;
                weather.innerText = data.weather[0].description;
            }else {
                alert("Enter Valid Search");
            }
        })
})