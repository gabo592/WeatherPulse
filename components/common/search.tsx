'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useDebouncedCallback } from 'use-debounce';

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
    <Input
      type="search"
      className="w-full max-w-md"
      placeholder={placeholder}
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get('query')?.toString()}
    />
  )
}
