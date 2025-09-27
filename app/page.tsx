import { Header } from "./components/Header";
import { FeaturedProjects } from "./sections/FeaturedProjects";
import { Hero } from "./sections/Hero";
import { WhatIfThis } from "./sections/WhatIfThis";

export default function Home() {
  return (
    <div className="w-full bg-[#C5C4C2]">
      <Header />
      <Hero />
      <FeaturedProjects />
      <WhatIfThis />
    </div>
  );
}
