# Weather Forecast CLI Application

This is a NodeJs command line application that returns the weather forecast of locations based on the user's input. The CLI Application fetches the following locations: Lagos, Abuja, Texas, Germany, Queenstown, Beijing, Sydney, Hurgamb, Manitoba for now.

## Project Requirements

- NodeJs: Download NodeJs using https://nodejs.org/en
- OpenMeteo API: Make use of the Open-Metero free weather API to get the weather forecast data using https://open-meteo.com/
- Axios: Install axios library to make HTTP requests using https://www.npmjs.com/package/

## Install & Run CLI

- Clone the repository using `[git clone https://github.com/](https://github.com/deedee-code/Weather-Forecast-CLI.git)`
- `cd Weather-Forecast-CLI`
- `npm install -g`
- Run the application using `weather-forecast`

## Usage

```NodeJs
$ weather-forecast

Enter a location for weather forecast: Lagos

Weather forecast for Lagos:
Latitude: 6.5
Longitude: 3.375
Daytime: 1
Rainy: 0
Snowfall: 0
Temperature: [
  29.2, 28.9, 28.8, 28.8, 28.7, 28.6, 28.6, 28.4, 29.1, 30.2,
    31,   32, 32.5,   33, 33.1, 32.8, 32.4, 31.7,   31, 30.3,
  29.9, 29.7, 29.7, 29.7, 29.7, 29.6, 29.5, 29.3,   29, 28.9,
  28.3, 28.1, 28.5, 29.7, 30.8, 31.6, 32.4, 32.5, 32.6, 32.5,
  32.2, 31.7,   31, 30.4, 29.9, 29.8, 29.7, 29.6, 29.1,   29,
  28.7, 28.5, 28.5, 28.5, 28.5, 28.5,   29, 30.3, 31.5, 32.5,
  32.9, 33.3, 33.2, 33.1, 32.7, 32.2, 31.5, 30.6, 30.1,   30,
  29.9, 29.8, 29.8, 29.7, 29.6, 29.6, 29.5, 29.3, 29.2, 29.1,
  29.7, 30.7, 31.8, 32.8, 33.4, 33.6, 33.7, 33.4,   33, 32.2,
  31.3, 30.6, 30.3, 30.2, 30.1,   30, 29.9, 29.8, 29.7, 29.6,
  ... 68 more items
]
Description: [
   3, 3, 3, 3,  3, 3,  3,  3, 2, 2, 2, 2,
   2, 2, 2, 2,  2, 2,  2,  3, 3, 3, 3, 3,
   3, 3, 3, 3, 80, 3, 80, 80, 3, 3, 3, 3,
   3, 3, 3, 3,  3, 3,  3,  3, 3, 3, 3, 3,
  80, 3, 3, 3,  3, 3,  3,  3, 3, 2, 2, 2,
   2, 3, 2, 2,  2, 1,  2,  3, 3, 3, 3, 3,
   3, 3, 3, 2,  3, 3,  3,  3, 3, 3, 3, 2,
   2, 3, 3, 3,  3, 3,  3,  3, 3, 3, 3, 3,
   3, 3, 3, 3,
  ... 68 more items
]
Wind Speed: [
   5.5, 4.7,  4.6,  4.1,  3.1,   3,  2.6,  2.4,  3.4,  6.5,  8.3,
   9.4, 9.7, 10.8, 11.6, 12.3,  12, 12.3, 10.7,  9.2,  8.4,    8,
   7.1, 6.3,  5.8,  4.9,  4.4, 4.6,  4.2,  4.3,    3,  3.3,  5.4,
   6.6, 7.2,    8,  9.7,  9.7, 9.8, 10.7,  9.3,  8.8,  7.9,  6.8,
   5.7,   6,    6,  6.3,  5.2, 4.8,  5.4,    5,  5.1,  4.1,  3.1,
   3.1, 3.7,  5.9,  6.1,  7.1, 8.9,  9.7, 10.8, 11.6, 11.4, 10.1,
     9, 7.6,  6.8,  5.5,    5, 5.5,  5.5,  5.6,  5.3,  4.4,  3.4,
   2.8, 3.1,  3.4,  3.4,  5.5, 5.9,  7.1,  7.9,  9.5, 10.4, 11.2,
  11.4,  11,   10,  9.2,  8.7, 8.1,  7.7,  7.9,  8.2,  8.4,  8.4,
   8.1,
  ... 68 more items
]
Humidity: [
  81, 83, 84, 84, 85, 86, 87, 87, 83, 76, 72, 68,
  66, 64, 64, 65, 67, 70, 73, 76, 79, 81, 81, 82,
  80, 81, 82, 83, 84, 86, 88, 89, 87, 80, 75, 71,
  68, 67, 68, 67, 68, 71, 75, 78, 82, 83, 83, 84,
  85, 86, 86, 87, 87, 87, 87, 89, 87, 78, 71, 66,
  65, 63, 64, 65, 66, 69, 72, 77, 80, 82, 83, 84,
  84, 84, 84, 84, 85, 86, 87, 88, 85, 78, 73, 67,
  64, 64, 64, 66, 68, 71, 76, 79, 81, 82, 83, 84,
  85, 85, 84, 83,
  ... 68 more items
]
Sunset: [
  '2024-04-24T18:54',
  '2024-04-25T18:54',
  '2024-04-26T18:54',
  '2024-04-27T18:54',
  '2024-04-28T18:54',
  '2024-04-29T18:54',
  '2024-04-30T18:54'
]
Sunrise: [
  '2024-04-24T06:35',
  '2024-04-25T06:34',
  '2024-04-26T06:34',
  '2024-04-27T06:34',
  '2024-04-28T06:33',
  '2024-04-29T06:33',
  '2024-04-30T06:33'
]
Timezone: Africa/Lagos
Timezone Abbreviation: WAT
```
