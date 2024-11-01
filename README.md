# WeatherApp

WeatherApp is a simple weather application built with Next.js and React that allows users to check the current weather of any city around the world. Using the OpenWeatherMap API, it displays essential information like temperature, humidity, and a brief weather description, with a user-friendly interface.

## Features

- City-Based Weather Search: Allows users to input a city name and retrieve current weather details.
- Clear User Interface:
  - FInput field for city name.
  - Search button to fetch weather data.
  - Display section for weather information, including:
    - Current temperature
    - Humidity
    - Brief weather description (e.g., "sunny", "cloudy").
- Error Handling: Provides appropriate feedback when an invalid city is entered or an error occurs in the request.
- Unit Tests: Ensures stable performance of core functionalities.

## Tech Stack

**Next.js**: 15.0.2

**React**: 19.0.0-rc-02c0e824-20241028

**API**: OpenWeatherMap

## Installation

1. Clone the repository:

```bash
  git clone https://github.com/gabo592/WeatherPulse
  cd WeatherPulse
```

2. Clone the repository:

```bash
  pnpm install
```

3. Create a .env.local file in the root directory and add your OpenWeatherMap API key:

```bash
  API_KEY=your_api_key
```

4. Create a .env.local file in the root directory and add your OpenWeatherMap API key:

```bash
  API_KEY=your_api_key
```

5. Start the development server:

```bash
  pnpm dev
```

The app will be available at http://localhost:3000.

## License

[MIT](https://choosealicense.com/licenses/mit/)
