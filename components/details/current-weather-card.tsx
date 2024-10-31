import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Droplets, Eye, Sunrise, Sunset, Thermometer, Wind } from "lucide-react";
import { getWeatherIcon } from "@/utils/weatherIcons";
import { City } from "@/models/city";
import { Weather } from "@/models/weather";

interface Props {
  city: City;
  weather: Weather;
}

export default async function CurrentWeatherCard({ city, weather }: Props) {

  return (
    <Card className="w-full max-w-4xl mb-6">
      <CardHeader>
        <CardTitle className="text-xl">{city.name}, {city.country}</CardTitle>
        <CardDescription>{city.state}</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="space-y-2">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-5 w-5 text-red-500" />
            <span className="text-xl">Temperatura: {weather.main.temp.toFixed(1)}°C</span>
          </div>
          <div>Sensación térmica: {weather.main.feels_like.toFixed(1)}°C</div>
          <div className="flex items-center space-x-2">
            {getWeatherIcon(weather.weather[0].main)}
            <span>{weather.weather[0].description}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Droplets className="h-5 w-5 text-blue-500" />
            <span>Humedad: {weather.main.humidity}%</span>
          </div>
        </section>
        <section className="space-y-2">
          <div className="flex items-center space-x-2">
            <Wind className="h-5 w-5 text-teal-500" />
            <span>Viento: {weather.wind.speed.toFixed(1)} m/s, {weather.wind.deg}°</span>
          </div>
          <div className="flex items-center space-x-2">
            <Eye className="h-6 w-6 text-indigo-500" />
            <span>Visibilidad: {(weather.visibility / 1000).toFixed(1)} km</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sunrise className="h-6 w-6 text-yellow-500" />
            <span>Amanecer: {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sunset className="h-6 w-6 text-orange-500" />
            <span>Atardecer: {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</span>
          </div>
        </section>
      </CardContent>
    </Card>
  )
}
