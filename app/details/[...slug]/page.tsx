import { getCity, getForecast, getWeather } from "@/app/actions";
import { ModeToggle } from "@/components/common/mode-toggle";
import ReturnButton from "@/components/common/return-button";
import CurrentWeatherCard from "@/components/details/current-weather-card";
import ForecastCards from "@/components/details/forecast-cards";
import { Skeleton } from "@/components/ui/skeleton";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const slug = (await params).slug
  const [query, country] = slug;

  const city = await getCity(query, country);

  if (!city) {
    redirect('/error');
  }

  const [weather, forecast] = await Promise.all([getWeather(city.lat, city.lon), getForecast(city.lat, city.lon)]);

  if (!weather || !forecast) {
    redirect('/error');
  }

  return (
    <>
      <section className="flex items-center justify-between p-4">
        <ReturnButton />
        <h1 className="text-xl font-bold">Details</h1>
        <ModeToggle />
      </section>
      <main className="flex flex-col items-center space-y-6 p-4">
        <Suspense fallback={<Skeleton className="w-[343px] max-w-4xl h-[387px] lg:h-[251px] rounded-xl" />}>
          <CurrentWeatherCard city={city} weather={weather} />
        </Suspense>
        <h2 className="text-xl font-bold">Forecast</h2>
        <Suspense fallback={<Skeleton className="w-[343px] max-w-4xl h-[387px] lg:h-[251px] rounded-xl" />}>
          <ForecastCards forecast={forecast} />
        </Suspense>
      </main>
    </>
  );
}
