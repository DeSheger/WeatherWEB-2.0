//http://api.openweathermap.org/data/2.5/weather?q=London&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6
//http://openweathermap.org/img/wn/02d@2x.png

class currentWeather {

    constructor() {
        this.current_city = document.querySelector(".weather-current__city");
        this.current_logo = document.querySelector(".weather-current__img");
        this.current_describe = document.querySelector(".weather-current__describe");
        this.current_temp = document.querySelector(".weather-current__temperature");
        this.current_wind = document.querySelector(".weather-current__wind");

        this.search_area = document.querySelectorAll(".search__area");

        this.search_area_values = this.search_area[0].value || this.search_area[1].value || this.search_area[2].value;
        this.cityName = this.search_area_values;
    }

    fetchCurrentWeatherData = () => {

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.current_city.textContent = data.name;
                this.current_logo.innerHTML = `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' width='100px' height='100px'>`;
                this.current_describe.textContent = data.weather[0].main;
                this.current_temp.textContent = `Temp: ${data.main.temp} C`;
                this.current_wind.textContent = `Wind: ${data.wind.speed} M/s`;
            });

    }

    clearSearchArea = () => {
        this.search_area.forEach((item, index) => {
            item.value = null;
        })
    }
}


export default currentWeather;
