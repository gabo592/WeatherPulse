import { getCities } from "@/app/actions";
import CityItem from "./city-item";
import SearchBanner from "../common/search-banner";
import NotifyBanner from "../common/notify-banner";

interface Props {
  query: string;
}

export default async function CitiesList({ query }: Props) {
  if (!query) {
    return (
      <SearchBanner />
    )
  }

  const cities = await getCities(query);

  if (cities.length === 0) {
    return (
      <NotifyBanner message={`No results found for: ${query}`} />
    )
  }

  return (
    <>
      <section className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {cities.map((city, index) => (
          <CityItem key={`item-${index}`} city={city} />
        ))}
      </section>
    </>
  )
}
