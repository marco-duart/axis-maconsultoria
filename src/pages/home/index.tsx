import { Presentation } from "./presentation";
import { Methodology } from "./methodology";
import { Solutions } from "./solutions";
import { CTASection } from "./cta-section";
import { CommonSolutions } from "./common-solutions";

export const Home = () => {
  return (
    <>
      <Presentation />
      <Methodology />
      <Solutions />
      <CommonSolutions />
      <CTASection />
    </>
  );
};
