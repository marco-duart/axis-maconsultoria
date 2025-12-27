import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import * as S from "./styles";
import { globalStyles } from "../../assets/styles/stitches.config";

export const BaseLayout = () => {
  globalStyles();

  return (
    <S.LayoutWrapper>
      <Header />
      <S.MainContent>
        <Outlet />
      </S.MainContent>
      <Footer />
    </S.LayoutWrapper>
  );
};
