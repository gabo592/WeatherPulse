'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useDebouncedCallback } from 'use-debounce';
import { Label } from "../ui/label";

interface Props {
  placeholder?: string
}

export default function Search({ placeholder = 'Search...' }: Props) {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${pathName}?${params.toString()}`)
  }, 500);

  return (
    <section className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="search">Search</Label>
      <Input
        id="search"
        name="search"
        type="search"
        className="w-full max-w-md"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
    </section>
  )
}
