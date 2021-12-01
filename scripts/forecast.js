//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6

function dailyWeather() {
    const daily_icon=document.querySelectorAll(".weather-week__img");
    const daily_temp=document.querySelectorAll(".weather-week__temp");
    console.log(daily_icon)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=18&exclude=current,minutely,hourly&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6&units=metric`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                
                daily_icon.forEach((value, index)=>{
                    value.innerHTML = `<img src='http://openweathermap.org/img/wn/${data.daily[index].weather[0].icon}@2x.png' width='30px' height='30px'> </br>`;
                })

                daily_temp.forEach((value, index)=>{
                    value.innerHTML = `${data.daily[index].dt} </br> ${data.daily[index].temp.day} C`;
                })
            });
}



export default dailyWeather;