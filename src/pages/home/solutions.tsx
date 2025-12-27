import * as S from "./styles";
import { FaCode, FaCloudUploadAlt, FaShieldAlt } from "react-icons/fa";

export const Solutions = () => {
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
    <S.SolutionsSection id="solucoes">
      <div style={{ textAlign: "left" }}>
        <S.Badge>Solutions Matrix</S.Badge>
        <h2 style={{ marginTop: "16px", fontSize: "2rem" }}>
          Capacidades <span style={{ color: "#D4AF37" }}>Técnicas</span>
        </h2>
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
