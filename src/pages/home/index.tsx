import { About } from "./about";
import { Presentation } from "./presentation";
import { Methodology } from "./methodology";
import { Solutions } from "./solutions";
import { CTASection } from "./cta-section";

export const Home = () => {
  return (
    <>
      <Presentation />
      <Methodology />
      <Solutions />
      <About />
      <CTASection />
    </>
  );
};
