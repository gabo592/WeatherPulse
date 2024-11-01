import Search from '@/components/common/search';
import Header from '@/components/common/header';
import dynamic from 'next/dynamic';

const CitiesList = dynamic(() => import('@/components/home/cities-list'));

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <>
      <Header />
      <main className="flex flex-col items-center p-4 gap-8">
        <Search placeholder="Enter the name of the city here" />
        <CitiesList query={query} />
      </main>
    </>
  );
}
