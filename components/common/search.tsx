'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useDebouncedCallback } from 'use-debounce';
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

interface Props {
  placeholder?: string
}

export default function Search({ placeholder = 'Search...' }: Props) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace, refresh } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathName}?${params.toString()}`)
  }, 300);

  return (
    <section className="flex items-center gap-4 w-full max-w-md">
      <Input
        id="search"
        name="search"
        type="search"
        className="w-full max-w-md"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <Button onClick={() => refresh()}>
        Search
        <SearchIcon />
      </Button>
    </section>
  )
}
