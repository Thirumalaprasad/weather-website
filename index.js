var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "63a90ae96d390ec37d6c1252f5a86e1"

// Function to convert temperature from Kelvin to Celsius
function convertToCelsius(val) {
    return (val - 273.15).toFixed(2); // Convert Kelvin to Celsius and fix to 2 decimal places
}

// Event listener for the button click
btn.addEventListener('click', function() {
    var cityName = inputvalue.value; // Get the value of the input field

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apik}`)
        .then(res => res.json())
        .then(data => {
            // Extract data from the response
            var nameval = data.name;
            var descriptionText = data.weather[0].description;
            var temperature = data.main.temp;
            var windSpeed = data.wind.speed;

            // Update HTML elements with the fetched data
            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertToCelsius(temperature)} °C</span>`;
            description.innerHTML = `Sky conditions: <span>${descriptionText}</span>`;
            wind.innerHTML = `Wind speed: <span>${windSpeed} km/h</span>`;
        })
        .catch(err => alert('You entered an incorrect city name or there was a problem with the API'));
});
