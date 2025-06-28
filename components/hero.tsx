'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
          Build technology with
          <br />
          strategy and global vision.
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Digital solutions tailored to the challenges of the present and the future: social network, communication, logistics, artificial intelligence, blockchain, and mobile platforms in a single strategic vision.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
        <Button onClick={() => router.push("/#about-us")}  size="lg" className="w-full sm:w-auto">
          Discover our approach
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button onClick={() => router.push("/contact")} variant="outline" size="lg" className="w-full sm:w-auto">
          Contact
        </Button>
      </div>
    </section>
  )
}
