import NotifyBanner from "@/components/common/notify-banner";
import ReturnButton from "@/components/common/return-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <header className="p-4">
        <ReturnButton />
      </header>
      <main className="flex flex-col items-center p-4 gap-8">
        <NotifyBanner />
        <Button asChild>
          <Link href='/'>Back to Home</Link>
        </Button>
      </main>
    </>
  )
}
