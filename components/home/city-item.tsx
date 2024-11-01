import { City } from "@/models/city";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { getWeather } from "@/app/actions";
import { Droplets, Thermometer, Wind } from 'lucide-react';
import { getWeatherIcon } from "@/utils/weatherIcons";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  city: City;
}

export default async function CityItem({ city }: Props) {
  const weather = await getWeather(city.lat, city.lon);

  if (!weather) {
    return null;
  }

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-lg">{city.name}, {city.country}</CardTitle>
        <CardDescription>{city.state}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <section className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-5 w-5 text-red-500" />
            <span>Temperature: {weather.main.temp.toFixed(1)}°C</span>
          </div>
          <span>Thermal sensation: {weather.main.feels_like.toFixed(1)}°C</span>
        </section>
        <section className="flex items-center space-x-2">
          {getWeatherIcon(weather.weather[0].main)}
          <span>{weather.weather[0].description}</span>
        </section>
        <section className="flex items-center space-x-2">
          <Droplets className="h-5 w-5 text-blue-500" />
          <span>Moisture: {weather.main.humidity}%</span>
        </section>
        <section className="flex items-center space-x-2">
          <Wind className="h-5 w-5 text-teal-500" />
          <span>Wind: {weather.wind.speed.toFixed(1)} m/s, {weather.wind.deg}°</span>
        </section>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/details/${city.name}/${city.country}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
