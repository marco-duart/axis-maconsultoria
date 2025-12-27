import * as S from "./styles";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export const Presentation = () => {
  const WHATSAPP_URL =
    "https://wa.me/5562994069668?text=Olá,%20vi%20o%20site%20da%20M.A.%20AXIS%20e%20gostaria%20de%20um%20diagnóstico%20técnico.";

  return (
    <S.PresentationSection id="apresentacao">
      <S.BackgroundEffect />

      <S.Badge>Sistemas de Alta Performance</S.Badge>

      <S.Title>
        Deciframos a complexidade.
        <span>Arquitetamos o Sucesso.</span>
      </S.Title>

      <S.Subtitle>
        Consultoria em TI e desenvolvimento de software para empresas que buscam
        o equilíbrio perfeito entre precisão técnica e escala financeira.
      </S.Subtitle>

      <S.CTAGroup>
        <S.ActionButton
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
        >
          <FaWhatsapp size={20} />
          Solicitar Diagnóstico
        </S.ActionButton>

        <S.ActionButton
          as="button"
          variant="secondary"
          onClick={() =>
            document
              .getElementById("metodologia")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Ver Metodologia
          <FaArrowRight size={14} />
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
