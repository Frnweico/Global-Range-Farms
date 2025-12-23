import Image from "next/image";
import ColoredLine from "../coloredLine/page"; 

const VideoSection = () => {
  const videoUrl = ""; 

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
          poster="/images/pngs/videoPlaceholder.png"
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

      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
    </section>
  );
};

export default VideoSection;