"use client"

import React, { useRef, useEffect, useState } from "react";
import { SiNextdotjs, SiPython, SiKotlin, SiSwift, SiReact, SiVuedotjs, SiFlutter, SiSolidity } from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

const logos = [
  { name: "Next.js", icon: <SiNextdotjs className="inline mr-2 text-3xl md:text-5xl" /> },
  { name: "Java", icon: <FaJava className="inline mr-2 text-3xl md:text-5xl" /> },
  { name: "Python", icon: <SiPython className="inline mr-2 text-3xl md:text-5xl" /> },
  { name: "Kotlin", icon: <SiKotlin className="inline mr-2 text-3xl md:text-5xl" /> },
  { name: "Swift", icon: <SiSwift className="inline mr-2 text-3xl md:text-5xl" /> },
  { name: "React", icon: <SiReact className="inline mr-2 text-3xl md:text-5xl" /> },
  { name: "Vue.js", icon: <SiVuedotjs className="inline mr-2 text-3xl md:text-5xl" /> },
  { name: "Flutter", icon: <SiFlutter className="inline mr-2 text-3xl md:text-5xl" /> },
  { name: "AWS", icon: <FaAws  className="inline mr-2 text-3xl md:text-5xl" /> },
  { name: "Solidity", icon: <SiSolidity className="inline mr-2 text-3xl md:text-5xl" /> },
];

export default function TechLogoCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="w-full py-10 overflow-hidden relative">
      <div className="carousel-mask w-full">
        <div
          ref={ref}
          style={{
            display: 'flex',
            animation: `scroll ${width ? width / 50 : 30}s linear infinite`,
            width: 'fit-content',
          }}
        >
          {logos.concat(logos).map((logo, idx) => (
            <span
              key={idx}
              className="flex text-2xl md:text-3xl font-semibold text-muted-foreground px-8 opacity-80 hover:opacity-100 transition-opacity rounded-lg py-4 shadow-sm items-center"
            >
              {logo.icon}
              {logo.name}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${width}px); }
        }
        .carousel-mask {
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>
    </section>
  );
} 