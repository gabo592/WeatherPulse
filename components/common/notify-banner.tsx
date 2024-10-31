import NotifySVG from "@/public/svg/notify.svg";
import Image from "next/image";

interface Props {
  message?: string;
}

export default function NotifyBanner({ message = 'Oops! Something seems to have gone wrong' }: Props) {
  return (
    <section className="flex flex-col items-center gap-4 w-full">
      <h2 className="text-lg lg:text-xl font-bold">{message}</h2>
      <Image src={NotifySVG} alt="notify_image" className="w-60 lg:w-96 h-auto" />
    </section>
  )
}
