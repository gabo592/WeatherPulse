import Search from '@/components/common/search';
import CitiesList from '@/components/home/cities-list';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/home/header';

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <>
      <header className="flex items-center justify-between p-4">
        <Header />
      </header>
      <main className="flex flex-col items-center p-4 gap-8">
        <Search placeholder="Search City..." />
        <Suspense fallback={<Skeleton className='w-[343px] h-[331px] rounded-md' />}>
          <CitiesList query={query} />
        </Suspense>
      </main>
    </>
  );
}
