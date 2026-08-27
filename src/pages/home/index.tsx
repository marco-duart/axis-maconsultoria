import { Presentation } from "./presentation";
import { FeaturedSpotlight } from "./featured-spotlight";
import { Products } from "./products";
import { Methodology } from "./methodology";
import { Consulting } from "./consulting";
import { CommonSolutions } from "./common-solutions";
import { CTASection } from "./cta-section";

export const Home = () => {
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
