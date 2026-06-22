import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let anchor links (e.g. #cardiology) handle their own scroll
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}