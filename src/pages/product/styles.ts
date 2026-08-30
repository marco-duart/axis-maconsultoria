import { Link } from "react-router-dom";
import { styled } from "../../assets/styles/stitches.config";

export const ThemedScreen = styled("div", {
  backgroundColor: "$bgPrimary",
  color: "$textHighContrast",
  borderRadius: "$lg",
  border: "1px solid $borderSubtle",
  padding: "$5",
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  minHeight: "70vh",
  transition: "background-color 0.3s ease",

  "@md": {
    padding: "$8",
  },
});

export const BackLink = styled(Link, {
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",
  fontFamily: "$mono",
  fontSize: "$sm",
  color: "$brandPrimary",
  textDecoration: "none",
  width: "fit-content",

  "&:hover": {
    textDecoration: "underline",
  },
});

export const HeroGrid = styled("div", {
  display: "grid",
  gap: "$6",

  "@md": {
    gridTemplateColumns: "1.1fr 1fr",
    alignItems: "start",
  },
});

export const ProductActions = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$3",
  marginTop: "$2",
});

export const NotFoundWrapper = styled("div", {
  textAlign: "center",
  padding: "$8 $4",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  alignItems: "center",
});
