import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to build a high-impact technology solution?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Whether you need an app, a network of suppliers, or a complete digital infrastructure, Encrova is ready to build with you.
        </p>
        <Link href="/contact">
          <Button size="lg" className="mt-4">
            Get Started now
          </Button>
        </Link>
      </div>
    </section>
  )
}
