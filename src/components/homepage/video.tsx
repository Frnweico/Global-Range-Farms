import Image from "next/image";
import ColoredLine from "../ui/ColoredLine"; 

const VideoSection = () => {
  const videoUrl = "/videos/GRFWeb.mp4"; 

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      <ColoredLine 
        bgColor="#4ACD20"
        width="60%"      
        className="absolute top-0 left-0 z-20" 
      />

      {videoUrl ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline 
          poster="/videos/GRFWeb.mp4"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        <Image 
          src="/images/pngs/videoPlaceholder.png" 
          alt="video placeholder"
          fill 
          className="object-cover"
          priority 
        />
      )}

    </section>
  );
};

export default VideoSection;