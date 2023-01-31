const $ = document.querySelector.bind(document);
const inputSearch = $('.input_search');
const city = $('.city');
const country = $('.country');
const hours = $('.hours');
const date = $('.date');
const valueTemperature = $('.value-temperature');
const shortDecs = $('.short-decs');
const view = $('.view-content');
const wind = $('.wind-content');
const humidity = $('.humidity-content');
const background = $('.wrapper');
const bg = $('.weather');

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    let hr = today.getHours();
    let min = today.getMinutes();
    if (min < 10) {
        min = "0" + min;
    }
    let ampm = "am";
    if( hr > 12 ) {
        hr -= 12;
        ampm = "pm";
    }

    const hour = hr + ':' + min + ' ' + ampm;
    const formattedToday = dd + '/' + mm + '/' + yyyy;

    date.innerText = formattedToday;
    hours.innerText = hour;


async function changeWeatherUI() {
    let search = inputSearch.value.trim();

    let apiURLGeocoding = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=2345572ec3e14895442fc9b4b73a2d4e`
    let dataGeocoding = await fetch(apiURLGeocoding).then(res => res.json());
    const dataGeocodings = dataGeocoding[0];

    let apiURLWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${dataGeocoding[0].lat}&lon=${dataGeocoding[0].lon}&appid=2345572ec3e14895442fc9b4b73a2d4e
    `
    let dataWeather = await fetch(apiURLWeather).then(res => res.json())

    city.innerText = dataGeocodings.name;
    country.innerText = dataGeocodings.country;
    valueTemperature.innerText = Math.round((dataWeather.main.temp)-273,15);
    view.innerText = dataWeather.visibility;
    wind.innerText = dataWeather.wind.speed;
    humidity.innerText = dataWeather.main.humidity;
    shortDecs.innerText = dataWeather.weather[0].description;

    if(valueTemperature.innerText > 20){
        background.classList.add('hot');
        background.classList.remove('cold');
        bg.classList.add('hot-bg');
        bg.classList.remove('cold-bg');
    }
    else{
        background.classList.add('cold');
        background.classList.remove('hot');
        bg.classList.add('cold-bg');
        bg.classList.remove('hot-bg');
    }
}

inputSearch.addEventListener('keypress', function (event) {
    if (event.key === "Enter") {        
        changeWeatherUI();
        inputSearch.value = ''
    }   
})

if(inputSearch.value == ''){
    inputSearch.value = 'hanoi';
    changeWeatherUI();
}