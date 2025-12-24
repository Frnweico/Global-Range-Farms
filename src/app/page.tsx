import About from "@/components/homepage/about";
import FAQS from "@/components/homepage/faqs";
import Hero from "@/components/homepage/hero";
import PremiumServices from "@/components/homepage/premium";
import OurProjects from "@/components/homepage/projects";
import OurServices from "@/components/homepage/services";
import Testimonials from "@/components/homepage/testimonials";
import VideoSection from "@/components/homepage/video";

export default function Home() {
  return (
   <div>
    <Hero />
    <About />
    <VideoSection />
    <OurProjects />
    <OurServices />
    <PremiumServices />
    <Testimonials />
    <FAQS />
   </div>
  );
}
