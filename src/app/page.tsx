import About from "@/components/homepage/about";
import FAQS from "@/components/homepage/faqs";
import Hero from "@/components/homepage/hero";
import PremiumServices from "@/components/homepage/premium";
import OurProducts from "@/components/homepage/products";
import OurServices from "@/components/homepage/services";
import Testimonials from "@/components/homepage/testimonials";
import VideoSection from "@/components/homepage/video";

export default function Home() {
  return (
   <div className="relative">
    <Hero />
    <About />
    <VideoSection />
    <OurProducts />
    <OurServices />
    <PremiumServices />
    <Testimonials />
    <FAQS />
   </div>
  );
}
