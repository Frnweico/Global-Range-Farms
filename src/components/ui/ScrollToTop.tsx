"use client";
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility: only show after scrolling down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      onClick={scrollToTop}
      // Fixed positioning puts it on the screen regardless of scroll
      // lg:hidden ensures it ONLY shows on mobile/tablet, not desktop
      className="fixed bottom-6 right-4 z-50 lg:hidden cursor-pointer group"
    >
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-100 transition-transform active:scale-95">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none" 
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="#0E0E0E" 
          className="w-6 h-6 -rotate-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default ScrollToTop;