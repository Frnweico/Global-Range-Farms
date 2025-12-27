import AboutHero from "@/components/about/hero";
import Vision from "@/components/about/vision";
import VisitUs from "@/components/about/visitUs";
import OurServices from "@/components/homepage/services";
import VideoSection from "@/components/homepage/video";

const page = () => {
  return (
    <div>
      <AboutHero />
      <VideoSection />
      <Vision />
      <OurServices />
      <VisitUs />
    </div>
  )
}

export default page
