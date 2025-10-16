var apiKey = 'your_api_key_here'; 

function fetchWeather(city) {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';

    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        return data;
    }).catch(function (error) {
        console.log('Error getting weather:', error);
    });
}

function displayWeather(data) {
    console.log('Weather in ' + data.name + ':');
    console.log('Temperature: ' + data.main.temp + '°C (' + celsiusToFahrenheit(data.main.temp) + '°F)');
    console.log('Humidity: ' + data.main.humidity + '% (Comfort level: ' + getHumidityComfort(data.main.humidity) + ')');
    console.log('Description: ' + data.weather[0].description);
}

function celsiusToFahrenheit(celsius) {
    
    return (celsius * 9 / 5) + 32;
}

function getHumidityComfort(humidity) {
    
    if (humidity < 30) {
        return 'Dry';
    } else if (humidity < 60) {
        return 'Comfortable';
    } else {
        return 'Humid';
    }
}

fetchWeather('London').then(displayWeather);
