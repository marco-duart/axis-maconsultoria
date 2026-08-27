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

export const CommonSolutionsSection = styled("section", {
  paddingY: "$8",
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  scrollMarginTop: "100px",
  borderTop: "1px solid $borderSubtle",
});

export const CommonSolutionsHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  maxWidth: "860px",

  h2: {
    fontSize: "$3xl",
    lineHeight: "$short",
  },
});

export const CommonSolutionsLead = styled("p", {
  color: "$textLowContrast",
  lineHeight: "$base",
  maxWidth: "760px",
});

export const CommonSolutionsGrid = styled("div", {
  display: "grid",
  gap: "$4",

  "@lg": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});

export const CommonSolutionCard = styled("article", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  padding: "$5",
  backgroundColor: "$bgSecondary",
  borderRadius: "$lg",
  border: "1px solid $borderSubtle",
  transition: "transform 0.3s ease, border-color 0.3s ease",

  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: "$brandPrimary",
  },
});

export const CommonSolutionContext = styled("p", {
  color: "$textLowContrast",
  fontSize: "$sm",
  lineHeight: "$base",
});

export const CommonSolutionLabel = styled("strong", {
  display: "block",
  fontFamily: "$mono",
  fontSize: "$xs",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "$brandSecondary",
  marginTop: "$2",
});

export const CommonSolutionList = styled("ul", {
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "$2",

  li: {
    fontSize: "$sm",
    color: "$textLowContrast",
    lineHeight: "$base",
    display: "flex",
    gap: "$2",

    "&::before": {
      content: '"→"',
      color: "$brandPrimary",
      fontFamily: "$mono",
    },
  },
});

export const ProductCardHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "$3",
});

export const ProductCategory = styled("span", {
  fontFamily: "$mono",
  fontSize: "$xs",
  color: "$textLowContrast",
  textTransform: "uppercase",
  letterSpacing: "1px",
});

export const ProductTagline = styled("p", {
  fontSize: "$sm",
  color: "$brandSecondary",
  fontWeight: "$medium",
});

export const StatusBadge = styled("span", {
  fontFamily: "$mono",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  padding: "3px 8px",
  borderRadius: "$full",
  border: "1px solid currentColor",
  whiteSpace: "nowrap",
  flexShrink: 0,

  variants: {
    status: {
      LIVE: {
        color: "$brandPrimary",
        backgroundColor: "rgba(0, 209, 255, 0.1)",
      },
      BETA: {
        color: "$brandSecondary",
        backgroundColor: "rgba(212, 175, 55, 0.1)",
      },
      IN_DEVELOPMENT: {
        color: "$textLowContrast",
        backgroundColor: "transparent",
        borderStyle: "dashed",
      },
      COMING_SOON: {
        color: "$brandAccent",
        backgroundColor: "rgba(110, 68, 255, 0.1)",
      },
    },
  },
});

export const InterfaceList = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$2",
  marginTop: "$2",
});

export const InterfaceBadge = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  fontSize: "$xs",
  fontFamily: "$heading",
  color: "$textHighContrast",
  backgroundColor: "$bgPrimary",
  border: "1px solid $borderSubtle",
  padding: "6px 10px",
  borderRadius: "$md",
  textDecoration: "none",
  transition: "all 0.2s ease",

  "&:hover": {
    borderColor: "$brandPrimary",
    color: "$brandPrimary",
  },

  variants: {
    disabled: {
      true: {
        opacity: 0.45,
        cursor: "default",
        pointerEvents: "none",
      },
    },
  },
});

export const ProductFooter = styled("div", {
  marginTop: "auto",
  paddingTop: "$4",
  display: "flex",
  flexDirection: "column",
  gap: "$3",
  borderTop: "1px solid $borderSubtle",
});

export const ProductLinkButton = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  fontFamily: "$heading",
  fontSize: "$sm",
  fontWeight: "$bold",
  color: "$bgPrimary",
  backgroundColor: "$brandPrimary",
  padding: "10px 16px",
  borderRadius: "$md",
  textDecoration: "none",
  textTransform: "uppercase",
  letterSpacing: "1px",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "#00b8e6",
    boxShadow: "$glow",
  },
});

export const CommonSolutionFooter = styled("div", {
  marginTop: "$2",
  borderTop: "1px solid $borderSubtle",
  paddingTop: "$3",
  display: "flex",
  flexDirection: "column",
  gap: "$2",

  p: {
    fontSize: "$sm",
    color: "$textLowContrast",
    lineHeight: "$base",
  },

  strong: {
    color: "$textHighContrast",
  },
});

export const SpotlightSection = styled("section", {
  paddingY: "$8",
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  scrollMarginTop: "100px",
});

export const SpotlightCard = styled("div", {
  position: "relative",
  display: "grid",
  gap: "$6",
  padding: "$5",
  backgroundColor: "$bgSecondary",
  borderRadius: "$lg",
  border: "1px solid $borderSubtle",
  borderTop: "3px solid $brandPrimary",

  "@md": {
    gridTemplateColumns: "1.1fr 1fr",
    padding: "$8",
  },
});

export const SpotlightVisual = styled("div", {
  position: "relative",
  borderRadius: "$md",
  overflow: "hidden",
  minHeight: "260px",
  backgroundColor: "$bgPrimary",
  border: "1px solid $borderSubtle",

  "@md": {
    minHeight: "100%",
  },
});

export const SpotlightImage = styled("img", {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  animation: `${reveal} 0.4s ease-out`,
});

export const SpotlightPlaceholder = styled("div", {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "$heading",
  fontSize: "$5xl",
  fontWeight: "$black",

  img: {
    objectFit: "contain",
  },
});

export const SpotlightImageDots = styled("div", {
  position: "absolute",
  bottom: "$3",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "6px",
});

export const SpotlightImageDot = styled("span", {
  display: "block",
  width: "6px",
  height: "6px",
  borderRadius: "$full",
  backgroundColor: "rgba(255, 255, 255, 0.3)",

  variants: {
    active: {
      true: { backgroundColor: "$brandPrimary" },
    },
  },
});

export const SpotlightContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$3",
});

export const SpotlightActions = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$3",
  marginTop: "$2",
});

export const SpotlightNav = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$4",

  "@md": {
    gridColumn: "1 / -1",
  },
});

export const SpotlightDots = styled("div", {
  display: "flex",
  gap: "$2",
});

export const SpotlightDot = styled("button", {
  width: "10px",
  height: "10px",
  borderRadius: "$full",
  border: "1px solid $borderSubtle",
  backgroundColor: "transparent",
  cursor: "pointer",
  padding: 0,
  transition: "all 0.2s ease",

  variants: {
    active: {
      true: {
        backgroundColor: "$brandPrimary",
        borderColor: "$brandPrimary",
        boxShadow: "$glow",
      },
    },
  },
});

export const SpotlightArrow = styled("button", {
  width: "32px",
  height: "32px",
  flexShrink: 0,
  borderRadius: "$full",
  border: "1px solid $borderSubtle",
  backgroundColor: "transparent",
  color: "$textHighContrast",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.2s ease",

  "&:hover": {
    borderColor: "$brandPrimary",
    color: "$brandPrimary",
  },
});
