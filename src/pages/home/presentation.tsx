import * as S from "./styles";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import { trackEvent } from "../../utils/analytics";

export const Presentation = () => {
  const WHATSAPP_URL =
    "https://wa.me/5562994069668?text=Olá,%20vi%20o%20site%20da%20M.A.%20AXIS%20e%20gostaria%20de%20saber%20mais.";

  return (
    <S.PresentationSection id="apresentacao">
      <S.BackgroundEffect />

      <S.Badge>Produtos & Engenharia de Software</S.Badge>

      <S.Title>
        Soluções prontas para o seu negócio decolar.
        <span>Da ideia ao produto no ar.</span>
      </S.Title>

      <S.Subtitle>
        A M.A. AXIS projeta e opera produtos digitais próprios — apps, web e
        integrações — prontos para resolver problemas reais. Precisa de algo
        sob medida? Também seguimos disponíveis como consultoria de
        engenharia.
      </S.Subtitle>

      <S.CTAGroup>
        <S.ActionButton
          as="button"
          variant="primary"
          onClick={() => {
            trackEvent({
              event: "cta_click",
              category: "engagement",
              action: "view_products",
              label: "presentation_produtos",
            });

            document
              .getElementById("destaques")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Ver Nossos Produtos
          <FaArrowRight size={14} />
        </S.ActionButton>

        <S.ActionButton
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          onClick={() =>
            trackEvent({
              event: "cta_click",
              category: "engagement",
              action: "whatsapp_contact",
              label: "presentation_consultoria",
            })
          }
        >
          <FaWhatsapp size={20} />
          Consultoria Sob Demanda
        </S.ActionButton>
      </S.CTAGroup>

      <div
        style={{
          marginTop: "64px",
          fontSize: "0.8rem",
          fontFamily: "Fira Code",
          color: "#1B1F24",
          opacity: 0.5,
        }}
      >
        {"// ANALYZING_SYSTEM_INTEGRITY: SUCCESS"}
      </div>
    </S.PresentationSection>
  );
};
