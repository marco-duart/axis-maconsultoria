import * as S from "./styles";
import { FaWhatsapp } from "react-icons/fa";
import { trackEvent } from "../../utils/analytics";

export const CTASection = () => {
  const WHATSAPP_URL =
    "https://wa.me/5562994069668?text=Olá,%20vi%20o%20portfólio%20de%20produtos%20da%20M.A.%20AXIS%20e%20quero%20saber%20mais.";

  return (
    <S.FinalCTASection id="cta">
      <h2 style={{ marginBottom: "16px" }}>
        Quer testar um produto ou falar sobre o seu{" "}
        <span>Eixo de Crescimento?</span>
      </h2>
      <S.CTAParagraph>
        Seja para experimentar o Mostraai, acompanhar os próximos lançamentos
        ou tratar de um projeto sob medida — estamos a uma mensagem de
        distância.
      </S.CTAParagraph>
      <S.ActionButton
        href={WHATSAPP_URL}
        target="_blank"
        variant="primary"
        onClick={() =>
          trackEvent({
            event: "cta_click",
            category: "engagement",
            action: "whatsapp_contact",
            label: "final_cta",
          })
        }
      >
        <FaWhatsapp size={20} />
        Falar com a M.A. AXIS
      </S.ActionButton>
    </S.FinalCTASection>
  );
};
