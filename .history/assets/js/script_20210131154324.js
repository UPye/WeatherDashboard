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
    var apiUrl = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=af23785a6adc1419c384f68b4a1ef8a7";

    // Make request to URL
    fetch(apiUrl)
        .then(function(response) {
            // If request is successful
            if (reponse.ok) {
                console.log(response);
                response.json().then(function(data))
            }
        })
}