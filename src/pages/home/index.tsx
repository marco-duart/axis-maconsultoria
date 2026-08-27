import { Presentation } from "./presentation";
import { Products } from "./products";
import { Methodology } from "./methodology";
import { Solutions } from "./solutions";
import { CTASection } from "./cta-section";
import { CommonSolutions } from "./common-solutions";

export const Home = () => {
  return (
    <>
      <Presentation />
      <Products />
      <Methodology />
      <Solutions />
      <CommonSolutions />
      <CTASection />
    </>
  );
};
