var 




var formSubmitHandler = function(event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if (city) {
        getCityInfo(city);

        // Clear old content
        cityContainerEl.textContent = "";
        cityInputEl.value = "";
    }
    else {
        alert("Please enter a valid city name")
    }
};

var getCityInfo = function(city) {
    // Format the API URL
    var apiUrl = "api.openweathermap.org/data/2.5/forecast?q=" + city name + "&appid=af23785a6adc1419c384f68b4a1ef8a7"
}