import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable smooth scrolling temporarily
    document.documentElement.style.scrollBehavior = "auto";

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Re-enable smooth scrolling after navigation completes
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = "smooth";
    }, 100); // Adjust timing if needed

  }, [pathname]);

  return null;
};

export default ScrollRestoration;