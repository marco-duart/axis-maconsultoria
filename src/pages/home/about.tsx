import * as S from "./styles";
import photo from "../../assets/images/photo.png";

export const About = () => {
  return (
    <S.AboutSection id="sobre">
      <S.AboutImageContainer>
        <img
          src={photo}
          alt="Marco Aurélio - Head of Technology & Founder M.A. AXIS"
        />
      </S.AboutImageContainer>

      <S.AboutContent>
        <S.Badge>O Especialista</S.Badge>
        <h2>
          Estratégia de Negócio com <span>Execução Técnica.</span>
        </h2>

        <p>
          Liderada por <strong>Marco Aurélio</strong>, Head of Technology e
          Arquiteto de Software, a M.A. AXIS une a visão executiva de quem
          gerencia orçamentos de Cloud e Projetos Complexos à precisão de quem
          domina o código.
        </p>

        <p>
          Minha trajetória é marcada pela intersecção entre o{" "}
          <strong>Rigor da Engenharia</strong> e a{" "}
          <strong>Estratégia de Negócio</strong>. Especialista em modernização
          de legados e migração para arquiteturas escaláveis
          (Microserviços/APIs), foco em eliminar o atrito tecnológico para
          viabilizar o crescimento financeiro.
        </p>

        <S.BrandCard>
          <div>
            <strong
              style={{
                color: "$brandSecondary",
                display: "block",
                fontSize: "0.8rem",
              }}
            >
              EXPERTISE
            </strong>
            <span style={{ fontSize: "0.85rem", color: "$textLowContrast" }}>
              Cloud FinOps, Arquitetura Clean, Liderança Técnica.
            </span>
          </div>
          <div>
            <strong
              style={{
                color: "$brandSecondary",
                display: "block",
                fontSize: "0.8rem",
              }}
            >
              MINDSET
            </strong>
            <span style={{ fontSize: "0.85rem", color: "$textLowContrast" }}>
              INTJ | Eneagrama 1 | Foco em Perfeição e Escala.
            </span>
          </div>
        </S.BrandCard>

        <S.Signature>
          MARCO AURÉLIO — FOUNDER
          <span>Head of Technology | Tech Lead</span>
        </S.Signature>
      </S.AboutContent>
    </S.AboutSection>
  );
};
