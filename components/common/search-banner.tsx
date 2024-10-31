import Image from "next/image";
import WeatherSVG from "@/public/svg/weather.svg";

export default function SearchBanner() {
  return (
    <section className="flex flex-col items-center gap-4 w-full">
      <h2 className="text-xl lg:text-2xl font-bold">Let’s find a city to know its climate!</h2>
      <Image src={WeatherSVG} alt="weather_search" className="w-80 lg:w-96 h-auto" />
    </section>
  )
}
