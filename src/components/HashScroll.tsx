"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function HashScroll() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        const timeoutId = setTimeout(() => {
          const delayedElement = document.getElementById(id);
          if (delayedElement) {
            delayedElement.scrollIntoView({ behavior: "smooth" });
          }
        }, 500); 

        return () => clearTimeout(timeoutId);
      }
        window.scrollTo(0, 0);
    }
  }, [pathname, searchParams]);

  return null;
}