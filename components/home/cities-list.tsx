import { getCities } from "@/app/actions";
import CityItem from "./city-item";

interface Props {
  query: string;
}

export default async function CitiesList({ query }: Props) {
  const cities = await getCities(query);

  if (cities.length === 0 && query) {
    return (
      <>
        <p className="text-lg font-bold">No results found for: {query}</p>
      </>
    )
  }

  return (
    <>
      <section className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {cities.map((city) => (
          <CityItem key={city.country} city={city} />
        ))}
      </section>
    </>
  )
}
