"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaBars, FaGithub } from "react-icons/fa"
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center relative">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">FakeCorp</span>
        </Link>
        {/* Desktop menu */}
        <nav className="hidden sm:flex flex-1 items-center space-x-5 text-sm font-medium">
          <Link href="/solutions" className="transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link href="/industries" className="transition-colors hover:text-primary">
            Industries
          </Link>
          <Link href="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
        </nav>
        {/* Desktop action buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <FaGithub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </Link>
          <Link href="/demo">
            <Button size="sm">Get a Demo</Button>
          </Link>
        </div>
        {/* Mobile hamburger button with Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="sm:hidden ml-auto p-2" aria-label="Open menu">
              <FaBars className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6 flex flex-col gap-6 sm:hidden w-4/5 max-w-xs">
            <SheetTitle className="mb-2">Menu</SheetTitle>
            <SheetDescription className="mb-4">Main menu for mobile navigation</SheetDescription>
            <nav className="flex flex-col gap-4 text-base font-medium">
              <SheetClose asChild>
                <Link href="/solutions" className="hover:text-primary">Solutions</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/industries" className="hover:text-primary">Industries</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about" className="hover:text-primary">About Us</Link>
              </SheetClose>
            </nav>
            <div className="flex justify-center">
              <SheetClose asChild>
                <Link href="https://github.com/amanesoft" target="_blank" rel="noreferrer">
                  <FaGithub className="h-5 w-5" />
                </Link>
              </SheetClose>
            </div>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/contact">
                  <Button variant="ghost" size="lg" className="w-full">Contact</Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/contact">
                  <Button size="lg" className="w-full">Get a Demo</Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}