//http://api.openweathermap.org/data/2.5/weather?q=London&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6
//http://openweathermap.org/img/wn/02d@2x.png

function current_weather() {


    const current = new XMLHttpRequest();

    let city_name = document.querySelectorAll(".search__area");
    let city_value=city_name[0].value || city_name[1].value;

    const current_city=document.querySelector(".weather-current__city");
    const current_logo=document.querySelector(".weather-current__img");
    const current_describe=document.querySelector(".weather-current__describe");
    const current_temp=document.querySelector(".weather-current__temperature");
    const current_wind=document.querySelector(".weather-current__wind");


        current.addEventListener("load", e => {
    
        if (current.status === 200) {
            let currentData=JSON.parse(current.response);
            console.log(currentData);
            let city=currentData.name;
            let icon=currentData.weather[0].icon;
            let describe=currentData.weather[0].main;
            let temp=currentData.main.temp;
            let wind=currentData.wind.speed;
        
            current_city.innerHTML=city;
            current_logo.innerHTML=`<img src='http://openweathermap.org/img/wn/${icon}@2x.png' width='100px' height='100px'>`;
            current_describe.innerHTML=describe;
            current_temp.innerHTML=`Temp: ${temp} C`;
            current_wind.innerHTML=`Wind: ${wind} M/s`;

      
        }
    });

        current.addEventListener("error", e => {
        alert("Niestety nie udało się nawiązać połączenia");
    });



    current.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${city_value}&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6&units=metric`, true);
    current.send();

    let area_clear=document.querySelectorAll(".search__area");

    area_clear[0].value="";
    area_clear[1].value="";

}