import Image from "next/image"
import Logo from "@/public/images/logo.png";
import { ModeToggle } from "../common/mode-toggle";

export default function Header() {
  return (
    <>
      <section className="flex items-center gap-4">
        <Image src={Logo} alt="logo" className="h-8 w-auto" />
        <h1 className="text-2xl font-bold">Weather Pulse</h1>
      </section>
      <ModeToggle />
    </>
  )
}
