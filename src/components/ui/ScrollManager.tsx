"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollManager = () => {
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      // 1. Always start by jumping to the top of the page
      window.scrollTo({ top: 0, behavior: "auto" });

      // 2. Check for a hash in the URL (e.g., #services)
      const hash = window.location.hash;
      
      if (hash) {
        // Remove the '#' to get the ID
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          // 3. If the element exists, scroll to it smoothly
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 100); // 100ms delay ensures the new page DOM is ready before looking for the ID

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollManager;