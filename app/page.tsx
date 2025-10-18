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
      <Hero />
      {/* <FeaturedProjects /> */}
      <WhatIfThis />
      <Testimonials />
      <PeopleBehind />
      <TechStacks />
    </div>
  );
}
