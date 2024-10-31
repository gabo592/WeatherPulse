import { Forecast } from "@/models/forecast";
import { Card, CardContent } from "../ui/card";
import { getWeatherIcon } from "@/utils/weatherIcons";

interface Props {
  forecast: Forecast;
}

export default async function ForecastCards({ forecast }: Props) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
      {forecast.list.map((item, index) => (
        <Card key={index} className="">
          <CardContent className="p-4">
            <div className="text-center">
              <p className="font-semibold">{new Date(item.dt * 1000).toLocaleDateString('es-ES', { weekday: 'short' })}</p>
              <div className="my-2">
                {getWeatherIcon(item.weather[0].main)}
              </div>
              <p className="text-2xl font-bold">{item.main.temp}°C</p>
              <p className="text-sm">{item.weather[0].description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  )
}
