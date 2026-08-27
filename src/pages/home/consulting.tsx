import * as S from "./styles";
import { FaCode, FaCloudUploadAlt, FaShieldAlt } from "react-icons/fa";

export const Consulting = () => {
  const services = [
    {
      icon: <FaCode size={24} />,
      title: "Desenvolvimento Core",
      items: [
        "Sistemas Web de Alta Complexidade",
        "Arquiteturas Escaláveis em Microserviços",
        "Aplicações Real-time e Event-driven",
        "Refatoração de Código para Performance",
      ],
      techs: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      icon: <FaCloudUploadAlt size={24} />,
      title: "Engenharia de Cloud",
      items: [
        "Infraestrutura como Código (IaC)",
        "Estratégias de Deploy Contínuo (CI/CD)",
        "Otimização de Custos Cloud",
        "Conteneirização e Orquestração",
      ],
      techs: ["AWS", "Docker", "Kubernetes", "Terraform"],
    },
    {
      icon: <FaShieldAlt size={24} />,
      title: "Consultoria Estratégica",
      items: [
        "Auditoria de Débito Técnico",
        "Mentoria para Times de Engenharia",
        "Planejamento de Roadmaps Tecnológicos",
        "Segurança e Integridade de Dados",
      ],
      techs: ["Agile", "SOLID", "Clean Arch", "DevSecOps"],
    },
  ];

  return (
    <S.SolutionsSection id="consultoria">
      <div style={{ textAlign: "left" }}>
        <S.Badge>Sob Demanda</S.Badge>
        <h2 style={{ marginTop: "16px", fontSize: "2rem" }}>
          Quando seu projeto precisa de{" "}
          <span style={{ color: "#00D1FF" }}>algo sob medida</span>
        </h2>
        <p
          style={{
            marginTop: "12px",
            maxWidth: "700px",
            color: "#8899A6",
            lineHeight: 1.6,
          }}
        >
          Nem todo problema cabe em um produto pronto. Para esses casos,
          seguimos disponíveis como consultoria de engenharia — do
          diagnóstico à entrega.
        </p>
      </div>

      <S.SolutionsGrid>
        {services.map((service, index) => (
          <S.SolutionCard key={index}>
            <div style={{ color: "#00D1FF" }}>{service.icon}</div>
            <S.MethodTitle>{service.title}</S.MethodTitle>
            <ul>
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <S.TechStack>
              {service.techs.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </S.TechStack>
          </S.SolutionCard>
        ))}
      </S.SolutionsGrid>
    </S.SolutionsSection>
  );
};
