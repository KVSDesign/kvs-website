import { Header } from "./components/Header";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { Hero } from "./sections/Hero";
import { PeopleBehind } from "./sections/PeopleBehind";
import { TechStacks } from "./sections/TechStacks";
import { Testimonials } from "./sections/Testimonials";
import { WhatIfThis } from "./sections/WhatIfThis";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="sticky w-full top-0 left-0">
        <Hero />
      </div>
      <div className="relative z-10 bg-[#C5C4C2]">
        <FeaturedProjects />
        <WhatIfThis />
        <Testimonials />
        <PeopleBehind />
        <TechStacks />
      </div>
    </div>
  );
}
