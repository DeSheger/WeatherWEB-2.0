import currentWeather from "./scripts/currentweather.js";
import dropdown from "./scripts/dropdown_menu.js";
import intro from "./scripts/intro.js";
import dailyWeather from "./scripts/forecast.js";

// Search Form on button click
const searchListener = document.querySelectorAll(".search__button");

searchListener.forEach(item => item.addEventListener('click', () => {
    intro();

    let current = new currentWeather;
    current.fetchCurrentWeatherData();
    current.clearSearchArea();

    dailyWeather();
}))


// Serch form on sumbit
const searchForms = document.querySelectorAll(".search");

searchForms.forEach((item) => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();

        intro();
        let current = new currentWeather;
        current.fetchCurrentWeatherData();
        current.clearSearchArea();

        dailyWeather();
    })
});


// Dropdown for MQ
dropdown();

