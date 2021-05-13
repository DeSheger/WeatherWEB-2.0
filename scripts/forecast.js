//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,hourly&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6

function daily_weather() {

daily_icon=document.querySelectorAll(".weather-week__img");
daily_temp=document.querySelectorAll(".weather-week__temp");
    const daily = new XMLHttpRequest();

        daily.addEventListener("load", e => {
    
        if (daily.status === 200) {

            let dailyData=JSON.parse(daily.response);
            console.log(dailyData);
            const array=[]; 
            for(i=0;i<8;i++)
            {
                let data=dailyData.daily[i].dt;
                let icon=dailyData.daily[i].weather[0].icon;
                let temp=dailyData.daily[i].temp.day;

                daily_icon[i].innerHTML=`<img src='http://openweathermap.org/img/wn/${icon}@2x.png' width='30px' height='30px'> </br>`;
                daily_temp[i].innerHTML=`${data} </br> ${temp} C`;
            }
      
        }
    });

        daily.addEventListener("error", e => {
        alert("Niestety nie udało się nawiązać połączenia");
    });



    daily.open("GET", `https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=18&exclude=current,minutely,hourly&appid=34cf18d958a5bebc2a3aaa0cf4eccbf6&units=metric`, true);
    daily.send();
}