import currentWeather from "./scripts/currentweather.js";
import intro from "./scripts/intro.js";
const searchListener = document.querySelectorAll(".search__button");



searchListener.forEach(item => item.addEventListener('click', () => {
    intro();

    let current = new currentWeather;
    current.fetchCurrentWeatherData();
    current.clearSearchArea();
}))

//

const searchForms = document.querySelectorAll(".search");

searchForms.forEach((item) => {
    item.addEventListener('submit', (e) => {
    e.preventDefault();

    intro();

    let current = new currentWeather;
    current.fetchCurrentWeatherData();
    current.clearSearchArea();
})});