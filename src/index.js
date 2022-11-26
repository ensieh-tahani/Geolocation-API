// challenge 1
function displayLocation(location) {
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
    console.log(lat);
    console.log(lon);
  
    let apiKey = "c7699193d293035651e73a0adb1b4454";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(showTemp);
  }
  navigator.geolocation.getCurrentPosition(displayLocation);

  //challenge 2 and 3
    function showTemp(response) {
    let temp = Math.round(response.data.main.temp);
    console.log(temp);
    let h1 = document.querySelector("h1");
    h1.innerHTML = `Temperature is ${temp}°C`;
  }