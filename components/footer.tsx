import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";

import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4 min-w-[220px]">
          <div className="flex items-center gap-2">
            <img src={logo.src} alt="Encrova Logo" className="w-[220px]" />
          </div>
          <p className="text-sm text-muted-foreground">
            Technology empowers global change.
          </p>
          <p className="text-xs text-muted-foreground">
            Flat /RM 1006 10/F Po Yip Building <br /> 23 Hing Yip Street Kwun
            Tong KL Hong Kong
          </p>
          <p className="text-xs text-muted-foreground">support@encrova.com</p>
          <div className="flex space-x-3 pt-2">
            <Link
              href="https://x.com/encrova"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary"
              aria-label="X"
            >
              <SiX className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/encrova-holding-limited"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="flex md:hidden md:justify-end">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Menu</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#about-us" className="hover:text-primary">
                <li>About us</li>
              </Link>
              <Link href="#solutions" className="hover:text-primary">
                <li>Solutions</li>
              </Link>
              <Link href="/contact" className="hover:text-primary">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          {/*   <div className="space-y-4">
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
          </div> */}
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alright reserve. Encrova Holding Limited.
        </p>
      </div>
    </footer>
  );
}
