import { ModeToggle } from '@/components/common/mode-toggle';
import Image from 'next/image';
import Logo from '@/public/images/logo.png';
import Search from '@/components/common/search';

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
        <section className="flex items-center gap-4">
          <Image src={Logo} alt="logo" className="h-8 w-auto" />
          <h1 className="text-2xl font-bold">Weather Pulse</h1>
        </section>
        <ModeToggle />
      </header>
      <main className="flex flex-col items-center p-4 gap-8">
        <Search placeholder="Search City..." />
        <p>query: {query}</p>
      </main>
    </>
  );
}
