import * as S from "./styles";
import { FaSearch, FaCode, FaCogs, FaRocket } from "react-icons/fa";

export const Methodology = () => {
  const steps = [
    {
      id: "01",
      icon: <FaSearch size={24} />,
      title: "Decifrar",
      desc: "Análise profunda do problema real do usuário para identificar o que vale a pena virar produto.",
    },
    {
      id: "02",
      icon: <FaCode size={24} />,
      title: "Arquitetar",
      desc: "Desenho de soluções escaláveis sob os princípios SOLID e Clean Code, garantindo longevidade ao produto.",
    },
    {
      id: "03",
      icon: <FaCogs size={24} />,
      title: "Materializar",
      desc: "Implementação rigorosa com ciclos de testes automatizados e integração contínua (CI/CD) em cada interface do sistema.",
    },
    {
      id: "04",
      icon: <FaRocket size={24} />,
      title: "Evoluir",
      desc: "Monitoramento de uso e performance para guiar o roadmap do produto com base em dados reais.",
    },
  ];

  return (
    <S.MethodSection id="metodologia">
      <div style={{ textAlign: "center" }}>
        <S.Badge>The Axis Method</S.Badge>
        <h2 style={{ marginTop: "16px", fontSize: "2rem" }}>
          Como construímos <span style={{ color: "#00D1FF" }}>nossos produtos</span>
        </h2>
      </div>

      <S.MethodGrid>
        {steps.map((step) => (
          <S.MethodCard key={step.id}>
            <span>{step.id}</span>
            <S.MethodIcon>{step.icon}</S.MethodIcon>
            <S.MethodTitle>{step.title}</S.MethodTitle>
            <S.MethodDesc>{step.desc}</S.MethodDesc>
          </S.MethodCard>
        ))}
      </S.MethodGrid>
    </S.MethodSection>
  );
};
