import React from "react";

export default function AboutUs() {
  return (
    <section id="about-us">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          High-performing technology builds platforms that scale and solutions that matter with Encrova.
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          We develop with a robust, flexible, and modern tech architecture. We use industry-leading languages, frameworks, and tools to build solutions that scale, integrate seamlessly, and address each client's real needs.
        </p>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Our tech stack powers our platforms and enables those who trust us to build their digital solutions.
        </p>
      </div>
    </section>
  );
} 