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
    var apiUrl = ""
}