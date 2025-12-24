import AboutHero from "@/components/about/hero";
import ServicesAbout from "@/components/about/services";
import Vision from "@/components/about/vision";
import VisitUs from "@/components/about/visitUs";
import VideoSection from "@/components/homepage/video";

const page = () => {
  return (
    <div>
      <AboutHero />
      <VideoSection />
      <Vision />
      <ServicesAbout />
      <VisitUs />
    </div>
  )
}

export default page
