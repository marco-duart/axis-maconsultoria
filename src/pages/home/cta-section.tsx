import * as S from "./styles";
import { FaWhatsapp } from "react-icons/fa";

export const CTASection = () => {
  const WHATSAPP_URL =
    "https://wa.me/5562994069668?text=Olá,%20li%20sobre%20o%20Método%20AXIS%20e%20gostaria%20de%20aplicá-lo%20no%20meu%20projeto.";

  return (
    <S.FinalCTASection id="cta">
      <h2 style={{ marginBottom: "16px" }}>
        Pronto para alinhar sua tecnologia ao seu{" "}
        <span>Eixo de Crescimento?</span>
      </h2>
      <S.CTAParagraph>
        Não deixe sua infraestrutura ser o gargalo do seu faturamento. Vamos
        projetar o próximo nível da sua operação.
      </S.CTAParagraph>
      <S.ActionButton href={WHATSAPP_URL} target="_blank" variant="primary">
        <FaWhatsapp size={20} />
        Iniciar Consultoria Agora
      </S.ActionButton>
    </S.FinalCTASection>
  );
};
