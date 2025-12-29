"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollManager = () => {
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });

      const hash = window.location.hash;
      
      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 100); 

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollManager;