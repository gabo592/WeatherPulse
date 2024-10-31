import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning } from 'lucide-react';

export const weatherIconMap: Record<string, JSX.Element> = {
  Clouds: <Cloud className="h-5 w-5 text-gray-500" />,
  Sun: <Sun className="h-5 w-5 text-orange-500" />,
  Rain: <CloudRain className="h-5 w-5 text-blue-500" />,
  Snow: <CloudSnow className="h-5 w-5" />,
  Thunderstorm: <CloudLightning className="h-5 w-5 text-gray-500" />,
};

export function getWeatherIcon(weatherDescription: string): JSX.Element {
  return weatherIconMap[weatherDescription] || <Sun />;
}
