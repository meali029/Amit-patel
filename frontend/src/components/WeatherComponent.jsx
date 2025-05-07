import React, { useState } from 'react';
import'../styles/weather.css';

const WeatherComponent = () => {
    const [city, setCity] = useState('Islamabad');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '93b3757281msh06618c540f0062cp15bb76jsn6fa60da44923',
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com',
        },
    };

    const fetchWeather = (cityName) => {
        fetch(`https://weather-api138.p.rapidapi.com/weather?city_name=${cityName}`, options)
            .then((response) => response.json())
            .then((data) => {
                if (data.cod === 200) {
                    setWeatherData(data);
                    setError(null);
                } else {
                    setError(data.message);
                    setWeatherData(null);
                }
            })
            .catch((err) => {
                setError('Failed to fetch weather data.');
                setWeatherData(null);
            });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (city.trim()) {
            fetchWeather(city);
        }
    };

    const handleClose = () => {
        setWeatherData(null);
    };

    const convertUnixToTime = (unixTimestamp) => {
        const date = new Date(unixTimestamp * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };

    return (
        <div className="weather-container">
            <h2>Weather 🌦️</h2>
            <form onSubmit={handleSearch} className="weather-form">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                    className="weather-input"
                />
                <button type="submit" className="weather-button">Search</button>
            </form>

            {error && <p className="error-message">{error}</p>}

            {weatherData && (
                <div className="weather-details">
                    <button className='closeBtn' onClick={handleClose}>Close</button>
                    <h2>Weather in {weatherData.name}, {weatherData.sys.country}</h2>
                    <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(1)}°C</p>
                    {/* <p>Feels Like: {(weatherData.main.feels_like - 273.15).toFixed(1)}°C</p> */}
                    {/* <p>Max Temp: {(weatherData.main.temp_max - 273.15).toFixed(1)}°C</p> */}
                    {/* <p>Min Temp: {(weatherData.main.temp_min - 273.15).toFixed(1)}°C</p> */}
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {(weatherData.wind.speed * 3.6).toFixed(1)} km/h</p>
                    <p>Cloudiness: {weatherData.clouds.all}%</p>
                    <p>Visibility: {(weatherData.visibility / 1000).toFixed(1)} km</p>
                    <p>Sunrise: {convertUnixToTime(weatherData.sys.sunrise)}</p>
                    <p>Sunset: {convertUnixToTime(weatherData.sys.sunset)}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherComponent;
