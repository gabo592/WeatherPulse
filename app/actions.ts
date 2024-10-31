'use server';

import { City } from '@/models/city';
import { Weather } from '@/models/weather';

export async function getCities(query: string): Promise<City[]> {
  if (!query) {
    return [];
  }

  const apiKey = process.env.API_KEY;
  const limit = 5;
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=${limit}&appid=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return [];
    }

    const data: City[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching city coordinates:', error);
    return [];
  }
}

export async function getWeather(
  lat: number,
  lon: number
): Promise<Weather | null> {
  const apiKey = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return null;
    }

    const data: Weather = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather details:', error);
    return null;
  }
}
