import About from "@/components/homepage/about";
import Hero from "@/components/homepage/hero";
import OurProjects from "@/components/homepage/projects";
import VideoSection from "@/components/homepage/video";

export default function Home() {
  return (
   <div>
    <Hero />
    <About />
    <VideoSection />
    <OurProjects />
   </div>
  );
}
