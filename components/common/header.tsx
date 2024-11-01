import Image from "next/image"
import Logo from "@/public/images/logo.png";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href='/' className="flex items-center gap-4">
        <Image src={Logo} alt="logo" className="h-8 w-auto" />
        <h1 className="text-2xl font-bold">Weather Pulse</h1>
      </Link>
      <ModeToggle />
    </header>
  )
}
