'use server';

import { City } from '@/models/city';
import { Forecast } from '@/models/forecast';
import { Weather } from '@/models/weather';

type ApiResponse<T> = T | null;

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const apiKey = process.env.API_KEY;
  const urlToFetch = `${url}&appid=${apiKey}`;

  try {
    const response = await fetch(urlToFetch);

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return null;
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error(`Error on fetchData function:`, error);
    return null;
  }
}

export async function getCities(query: string): Promise<City[]> {
  if (!query) {
    return [];
  }

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;

  const cities = await fetchData<City[]>(url);

  return cities || [];
}

export async function getCity(
  query: string,
  country: string
): Promise<City | undefined> {
  const cities = await getCities(query);

  return cities.find((city) => city.country === country);
}

async function fetchWeatherData<T>(
  endpoint: string,
  lat: number,
  lon: number
): Promise<ApiResponse<T>> {
  const url = `https://api.openweathermap.org/data/2.5/${endpoint}?lat=${lat}&lon=${lon}&units=metric`;

  return fetchData<T>(url);
}

export async function getWeather(
  lat: number,
  lon: number
): Promise<Weather | null> {
  return fetchWeatherData<Weather>('weather', lat, lon);
}

export async function getForecast(
  lat: number,
  lon: number
): Promise<Forecast | null> {
  return fetchWeatherData<Forecast>('forecast', lat, lon);
}
