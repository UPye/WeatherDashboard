




var formSubmitHandler = function(event) {
    event.preventDefault();

    var city = cityInputEl.value.trim();

    if (city) {
        getCityInfo(city);

        // Clear old content
        cityContainerEl.textContent = "";
        cityInputEl.value = ""
    }
}