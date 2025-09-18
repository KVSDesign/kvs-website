import { FeaturedProjects } from "./sections/FeaturedProjects";
import { Hero } from "./sections/Hero";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <FeaturedProjects />
    </div>
  );
}
