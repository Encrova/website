import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"
import { SiX } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4 min-w-[220px]">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-2xl">FakeCorp</span>
          </div>
          <p className="text-sm text-muted-foreground">Empowering your digital future.</p>
          <p className="text-xs text-muted-foreground">1234 Main St, Cityville, Country</p>
          <p className="text-xs text-muted-foreground">contact@fakecorp.com</p>
          <div className="flex space-x-3 pt-2">
            <Link href="https://x.com/fakecorp" className="text-muted-foreground hover:text-primary" aria-label="X">
              <SiX className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com/company/fakecorp" className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Objectives</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Lead Acquisition</li>
              <li>Marketing Intelligence</li>
              <li>Finance</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Business type</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Startups</li>
              <li>Enterprises</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>About us</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FakeCorp. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
