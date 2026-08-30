import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Presentation } from "./presentation";
import { FeaturedSpotlight } from "./featured-spotlight";
import { Products } from "./products";
import { Methodology } from "./methodology";
import { Consulting } from "./consulting";
import { CommonSolutions } from "./common-solutions";
import { CTASection } from "./cta-section";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }, [location.hash]);

  return (
    <>
      <Presentation />
      <FeaturedSpotlight />
      <Products />
      <Methodology />
      <Consulting />
      <CommonSolutions />
      <CTASection />
    </>
  );
};
