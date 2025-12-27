import { styled, keyframes } from "../../assets/styles/stitches.config";

const reveal = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const pulse = keyframes({
  "0%, 100%": { opacity: 0.5 },
  "50%": { opacity: 1 },
});

export const PresentationSection = styled("section", {
  minHeight: "calc(100vh - 80px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  paddingY: "$8",
});

export const Badge = styled("span", {
  fontFamily: "$mono",
  fontSize: "$xs",
  color: "$brandPrimary",
  textTransform: "uppercase",
  letterSpacing: "2px",
  border: "1px solid $brandPrimary",
  padding: "$1 $3",
  borderRadius: "$full",
  marginBottom: "$4",
  animation: `${reveal} 0.8s ease-out`,
});

export const Title = styled("h1", {
  fontSize: "$3xl",
  lineHeight: "$shorter",
  maxWidth: "900px",
  marginBottom: "$4",
  animation: `${reveal} 1s ease-out`,

  "@md": {
    fontSize: "$5xl",
  },

  span: {
    color: "$brandSecondary",
    display: "block",
  },
});

export const Subtitle = styled("p", {
  fontSize: "$lg",
  color: "$textLowContrast",
  maxWidth: "600px",
  marginBottom: "$6",
  lineHeight: "$base",
  animation: `${reveal} 1.2s ease-out`,
});

export const BackgroundEffect = styled("div", {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  zIndex: -1,
  background:
    "radial-gradient(circle, rgba(0, 209, 255, 0.05) 0%, rgba(5, 7, 10, 0) 70%)",
  animation: `${pulse} 4s infinite ease-in-out`,
});

export const CTAGroup = styled("div", {
  display: "flex",
  gap: "$4",
  flexDirection: "column",
  animation: `${reveal} 1.4s ease-out`,

  "@sm": {
    flexDirection: "row",
  },
});

const pulseGlow = keyframes({
  "0%": { boxShadow: "0 0 0 0 rgba(0, 209, 255, 0.4)" },
  "70%": { boxShadow: "0 0 0 10px rgba(0, 209, 255, 0)" },
  "100%": { boxShadow: "0 0 0 0 rgba(0, 209, 255, 0)" },
});

export const ActionButton = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  backgroundColor: "transparent",
  border: "1px solid $brandPrimary",
  color: "$brandPrimary",
  padding: "12px 24px",
  borderRadius: "$md",
  fontFamily: "$heading",
  fontWeight: "$bold",
  textDecoration: "none",
  fontSize: "$sm",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  textTransform: "uppercase",
  letterSpacing: "1px",

  "&:hover": {
    backgroundColor: "$brandPrimary",
    color: "$bgPrimary",
    boxShadow: "$glow",
    transform: "translateY(-2px)",
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$brandPrimary",
        color: "$bgPrimary",
        animation: `${pulseGlow} 2s infinite`,
        "&:hover": {
          backgroundColor: "#00b8e6",
        },
      },
      secondary: {
        borderColor: "$textLowContrast",
        color: "$textHighContrast",
        "&:hover": {
          borderColor: "$brandPrimary",
          backgroundColor: "transparent",
          color: "$brandPrimary",
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export const AboutSection = styled("section", {
  paddingY: "$8",
  display: "grid",
  gap: "$6",
  alignItems: "center",
  borderTop: "1px solid $borderSubtle",
  scrollMarginTop: "100px",

  "@md": {
    gridTemplateColumns: "1fr 1.2fr",
    gap: "$8",
    paddingY: "$8",
  },
});

export const AboutImageContainer = styled("div", {
  position: "relative",
  borderRadius: "$lg",
  border: "1px solid $brandSecondary",
  padding: "$2",
  backgroundColor: "$bgSecondary",

  img: {
    width: "100%",
    height: "auto",
    borderRadius: "$md",
    filter: "contrast(1.1) brightness(0.9)",
    display: "block",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: "-15px",
    left: "-15px",
    width: "40px",
    height: "40px",
    borderTop: "2px solid $brandPrimary",
    borderLeft: "2px solid $brandPrimary",
  },
});

export const AboutContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const Signature = styled("div", {
  marginTop: "$4",
  fontFamily: "$mono",
  fontSize: "$sm",
  color: "$brandSecondary",
  display: "flex",
  flexDirection: "column",
  gap: "4px",

  span: {
    color: "$textLowContrast",
    fontSize: "$xs",
  },
});

export const MethodSection = styled("section", {
  paddingY: "$8",
  backgroundColor: "$bgSecondary",
  borderRadius: "$lg",
  paddingX: "$4",
  marginTop: "$8",
  scrollMarginTop: "100px",

  "@md": {
    paddingX: "$8",
    paddingY: "$8",
  },
});

export const MethodGrid = styled("div", {
  display: "grid",
  gap: "$6",
  marginTop: "$7",

  "@md": {
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "$4",
  },
});

export const MethodCard = styled("div", {
  position: "relative",
  padding: "$4",
  backgroundColor: "$bgPrimary",
  borderRadius: "$md",
  border: "1px solid $borderSubtle",
  transition: "transform 0.3s ease, border-color 0.3s ease",

  "&:hover": {
    transform: "translateY(-5px)",
    borderColor: "$brandPrimary",
  },

  span: {
    fontFamily: "$mono",
    fontSize: "$5xl",
    color: "#1B1F24",
    position: "absolute",
    top: "10px",
    right: "20px",
    zIndex: 0,
    userSelect: "none",
  },
});

export const MethodIcon = styled("div", {
  color: "$brandPrimary",
  marginBottom: "$4",
  position: "relative",
  zIndex: 1,
});

export const MethodTitle = styled("h3", {
  fontSize: "$lg",
  marginBottom: "$3",
  color: "$textHighContrast",
  position: "relative",
  zIndex: 1,
});

export const MethodDesc = styled("p", {
  fontSize: "$sm",
  color: "$textLowContrast",
  lineHeight: "$base",
  position: "relative",
  zIndex: 1,
});

export const SolutionsSection = styled("section", {
  paddingY: "$8",
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  scrollMarginTop: "100px",
});

export const SolutionsGrid = styled("div", {
  display: "grid",
  gap: "$4",

  "@md": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

export const SolutionCard = styled("div", {
  padding: "$6",
  backgroundColor: "$bgSecondary",
  borderRadius: "$lg",
  border: "1px solid $borderSubtle",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  transition: "all 0.3s ease",

  "&:hover": {
    borderColor: "$brandSecondary",
    transform: "scale(1.02)",
    boxShadow: "$goldGlow",
  },

  ul: {
    listStyle: "none",
    padding: 0,
    marginTop: "$2",
  },

  li: {
    fontSize: "$sm",
    color: "$textLowContrast",
    marginBottom: "$2",
    display: "flex",
    alignItems: "center",
    gap: "$2",

    "&::before": {
      content: '"→"',
      color: "$brandPrimary",
      fontFamily: "$mono",
    },
  },
});

export const TechStack = styled("div", {
  marginTop: "auto",
  paddingTop: "$4",
  borderTop: "1px solid $borderSubtle",
  display: "flex",
  flexWrap: "wrap",
  gap: "$2",

  span: {
    fontSize: "10px",
    fontFamily: "$mono",
    color: "$brandPrimary",
    backgroundColor: "rgba(0, 209, 255, 0.1)",
    padding: "2px 6px",
    borderRadius: "4px",
    textTransform: "uppercase",
  },
});

export const FinalCTASection = styled("section", {
  paddingY: "$8",
  paddingX: "$2",
  textAlign: "center",
  backgroundColor: "rgba(0, 209, 255, 0.03)",
  borderRadius: "$lg",
  border: "1px dashed $brandPrimary",
  marginY: "$8",
  scrollMarginTop: "100px",
});

export const CTAParagraph = styled("p", {
  color: "$textLowContrast",
  marginBottom: "$4",
  maxWidth: "600px",
  marginX: "auto",
});

export const BrandCard = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
  margin: "24px 0",
  padding: "16px",
  backgroundColor: "rgba(212, 175, 55, 0.05)",
  borderRadius: "8px",
  borderLeft: "2px solid $brandSecondary",
});
