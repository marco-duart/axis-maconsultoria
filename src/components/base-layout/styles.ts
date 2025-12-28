import { styled } from "../../assets/styles/stitches.config";

export const LayoutWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "$bgPrimary",
});

export const MainContent = styled("main", {
  flex: "1 1 auto",
  width: "100%",
  maxWidth: "$xl",
  marginX: "auto",
  padding: "$4",
  marginTop: "80px",

  "@md": {
    padding: "$6",
  },
});

export const HeaderContainer = styled("header", {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  height: "80px",
  zIndex: "$header",
  backgroundColor: "rgba(5, 7, 10, 0.8)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid $borderSubtle",
  display: "flex",
  alignItems: "center",
  paddingX: "$4",

  "@md": {
    paddingX: "$8",
  },
});

export const Nav = styled("nav", {
  display: "none",
  gap: "$6",
  marginLeft: "auto",

  "@md": {
    display: "flex",
  },
});

export const NavLink = styled("a", {
  color: "$textLowContrast",
  textDecoration: "none",
  fontSize: "$sm",
  fontWeight: "$medium",
  fontFamily: "$heading",
  transition: "all 0.2s ease",
  textTransform: "uppercase",
  letterSpacing: "1px",
  position: "relative",

  "&:hover": {
    color: "$brandPrimary",
    textShadow: "$glow",
  },

  variants: {
    active: {
      true: {
        color: "$brandPrimary",
        textShadow: "$glow",
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "-4px",
          left: 0,
          width: "100%",
          height: "2px",
          backgroundColor: "$brandPrimary",
          boxShadow: "$glow",
        },
      },
    },
  },
});

export const FooterContainer = styled("footer", {
  padding: "$8 $4",
  borderTop: "1px solid $borderSubtle",
  textAlign: "center",
  backgroundColor: "$bgSecondary",

  "@md": {
    padding: "$8 $8",
    textAlign: "left",
  },
});

export const Copyright = styled("p", {
  fontSize: "$xs",
  color: "$textLowContrast",
  fontFamily: "$mono",
});

export const ActionButton = styled("button", {
  backgroundColor: "transparent",
  border: "1px solid $brandPrimary",
  color: "$brandPrimary",
  padding: "8px 12px",
  borderRadius: "$md",
  fontFamily: "$heading",
  fontSize: "$xs",
  cursor: "pointer",
  transition: "all 0.3s",
  whiteSpace: "nowrap",

  "@md": {
    padding: "10px 20px",
    fontSize: "$sm",
  },

  "&:hover": {
    backgroundColor: "$brandPrimary",
    color: "$bgPrimary",
    boxShadow: "$glow",
  },
});
