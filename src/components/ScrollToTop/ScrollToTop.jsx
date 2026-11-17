// components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top on route change, or to the element matching the URL hash
// (e.g. "/#contact", "/#services") once it has rendered.
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts++ < 20) {
        timer = setTimeout(tryScroll, 50);
      }
    };
    tryScroll();
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
};
