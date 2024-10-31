import Search from '@/components/common/search';
import CitiesList from '@/components/home/cities-list';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/common/header';

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
        <Suspense fallback={<Skeleton className='w-[343px] h-[331px] rounded-xl' />}>
          <CitiesList query={query} />
        </Suspense>
      </main>
    </>
  );
}
