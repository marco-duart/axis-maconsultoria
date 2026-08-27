import React, { useEffect, useState } from "react";
import LogoAxis from "../logo-axis";
import * as S from "./styles";
import { trackEvent } from "../../utils/analytics";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const WHATSAPP_URL =
    "https://wa.me/5562994069668?text=Olá,%20vi%20o%20site%20da%20M.A.%20AXIS%20e%20gostaria%20de%20saber%20mais.";

  useEffect(() => {
    const sections = ["apresentacao", "destaques", "produtos", "consultoria"];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    trackEvent({
      event: "navigation_click",
      category: "navigation",
      action: "header_menu",
      label: id,
    });

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <S.HeaderContainer>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
        }}
        onClick={() => {
          trackEvent({
            event: "navigation_click",
            category: "navigation",
            action: "header_logo",
            label: "top",
          });

          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <LogoAxis width={40} height={40} />
        <span
          style={{
            fontFamily: "Lexend",
            fontWeight: 700,
            letterSpacing: "2px",
            fontSize: "1.2rem",
            color: "white",
          }}
        >
          M.A. <span style={{ color: "#D4AF37" }}>AXIS</span>
        </span>
      </div>

      <S.Nav>
        <S.NavLink
          href="#apresentacao"
          active={activeSection === "apresentacao"}
          onClick={(e) => handleScroll(e, "apresentacao")}
        >
          Início
        </S.NavLink>
        <S.NavLink
          href="#destaques"
          active={activeSection === "destaques"}
          onClick={(e) => handleScroll(e, "destaques")}
        >
          Destaques
        </S.NavLink>
        <S.NavLink
          href="#produtos"
          active={activeSection === "produtos"}
          onClick={(e) => handleScroll(e, "produtos")}
        >
          Produtos
        </S.NavLink>
        <S.NavLink
          href="#consultoria"
          active={activeSection === "consultoria"}
          onClick={(e) => handleScroll(e, "consultoria")}
        >
          Consultoria
        </S.NavLink>
      </S.Nav>

      <div style={{ marginLeft: "auto" }}>
        <S.ActionButton
          as="a"
          href={WHATSAPP_URL}
          target="_blank"
          style={{ textDecoration: "none" }}
          onClick={() =>
            trackEvent({
              event: "cta_click",
              category: "engagement",
              action: "whatsapp_contact",
              label: "header_contato",
            })
          }
        >
          Falar com a gente
        </S.ActionButton>
      </div>
    </S.HeaderContainer>
  );
};
