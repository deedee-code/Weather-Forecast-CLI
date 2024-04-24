#!/usr/bin/env node

const axios = require("axios");
const readline = require("readline");


// Function to fetch weather forecast for a given location
async function getWeatherForecast(location) {
    try {
        const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=is_day,rain,snowfall&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=sunrise,sunset&timezone=auto`);

        return response.data;

    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        return null;
    }
}

// Define locations
const locations = {
    Lagos: { latitude: 6.4541, longitude: 3.3947 },
    Abuja: { latitude: 9.0579, longitude: 7.4951 },
    Texas: { latitude: 39.76, longitude: -98.5 },
    Hurgamb: { latitude: 27.2708, longitude: 30.8025 },
    Manitoba: { latitude: 49.8954, longitude: -97.1385 },
    Sydney: { latitude: -33.8688, longitude: 151.2093 },
    Beijing: { latitude: 39.9042, longitude: 116.4074 },
    Queenstown: { latitude: -45.031162, longitude: 168.662643 },
    Germany: { latitude: 52.52, longitude: 13.41 }
};


// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Function to prompt user for location input
function promptForLocation() {
    rl.question("Enter a location for weather forecast: ", async (locationName) => {
        const location = locations[locationName];
        if (location) {
            const weatherData = await getWeatherForecast(location);
            if (weatherData) {
                displayWeatherForecast(locationName, weatherData);
            } else {
                console.log("Failed to fetch weather data.");
            }
        } else {
            console.log("Location not found. Please try again.");
            promptForLocation();
        }
        rl.close();
    });
}

// Function to display weather forecast information
function displayWeatherForecast(locationName, weatherData) {
    console.log(`Weather forecast for ${locationName}:`);
    console.log("Latitude:", weatherData.latitude);
    console.log("Longitude:", weatherData.longitude);
    console.log("Daytime:", weatherData.current.is_day);
    console.log("Rainy:", weatherData.current.rain);
    console.log("Snowfall:", weatherData.current.snowfall);
    console.log("Temperature:", weatherData.hourly.temperature_2m);
    console.log("Description:", weatherData.hourly.weather_code);
    console.log("Wind Speed:", weatherData.hourly.wind_speed_10m);
    console.log("Humidity:", weatherData.hourly.relative_humidity_2m);
    console.log("Sunset:", weatherData.daily.sunset);
    console.log("Sunrise:", weatherData.daily.sunrise);
    console.log("Timezone:", weatherData.timezone);
    console.log("Timezone Abbreviation:", weatherData.timezone_abbreviation);
}


// Run the prompt for location function
promptForLocation();
