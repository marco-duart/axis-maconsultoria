import * as S from "./styles";

export const CommonSolutions = () => {
  const commonCases = [
    {
      title: "Operação Comercial travando por processos manuais",
      context: "Times de vendas e financeiro dependem de planilhas isoladas, com retrabalho diário e perda de SLA.",
      approach: [
        "Mapeamento do fluxo ponta a ponta (lead, proposta, contrato, cobrança e suporte).",
        "Criação de backend único para regras de negócio e integrações com ERP/CRM.",
        "Painel operacional com alertas de gargalo e trilha de auditoria por evento.",
      ],
      stack: ["React", "Node.js", "PostgreSQL", "Fila de Eventos"],
      delivery: "MVP funcional em 6-8 semanas, com evolução por módulos.",
      impact:
        "Redução de tarefas repetitivas, menor erro operacional e previsibilidade de execução.",
    },
    {
      title: "Sistema legado lento e caro para manter",
      context: "Aplicação monolítica com deploy arriscado, indisponibilidades recorrentes e alto custo de mudança.",
      approach: [
        "Diagnóstico de pontos críticos de performance e risco de regressão.",
        "Estrangulamento gradual do legado por APIs e serviços de domínio.",
        "Pipeline de CI/CD com testes de regressão e rollback controlado.",
      ],
      stack: ["TypeScript", "APIs", "Docker", "CI/CD"],
      delivery:
        "Plano técnico em 15 dias e execução incremental para evitar parada da operação.",
      impact:
        "Mais estabilidade em produção e velocidade de entrega sem reescrever tudo de uma vez.",
    },
    {
      title: "Escala sem observabilidade nem governança",
      context:
        "Crescimento de clientes sem telemetria confiável, custos cloud subindo e incidentes difíceis de rastrear.",
      approach: [
        "Instrumentação de logs, métricas e rastreamento distribuído por serviço.",
        "Definição de SLO/SLA com alertas acionáveis para time técnico e gestão.",
        "Governança de ambiente com controle de custos e padrões de segurança.",
      ],
      stack: ["Observabilidade", "Cloud", "FinOps", "DevSecOps"],
      delivery:
        "Esteira de monitoramento e governança ativada em 30 dias, com revisão mensal.",
      impact:
        "Decisão baseada em dados de produção e melhor equilíbrio entre performance e custo.",
    },
  ];

  return (
    <S.CommonSolutionsSection id="solucoes-comuns">
      <S.CommonSolutionsHeader>
        <S.Badge>Cenários Mais Pedidos</S.Badge>
        <h2>Como atuamos quando o projeto é sob medida</h2>
        <S.CommonSolutionsLead>
          Estrutura de entrega usada nos projetos de consultoria — para
          empresas que precisam de tecnologia confiável para vender, operar e
          escalar sem improviso, fora do escopo dos nossos produtos prontos.
        </S.CommonSolutionsLead>
      </S.CommonSolutionsHeader>

      <S.CommonSolutionsGrid>
        {commonCases.map((item, index) => (
          <S.CommonSolutionCard key={index}>
            <S.MethodTitle>{item.title}</S.MethodTitle>
            <S.CommonSolutionContext>{item.context}</S.CommonSolutionContext>

            <S.CommonSolutionLabel>Arquitetura de Solução</S.CommonSolutionLabel>
            <S.CommonSolutionList>
              {item.approach.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </S.CommonSolutionList>

            <S.CommonSolutionLabel>Stack sugerida</S.CommonSolutionLabel>
            <S.TechStack>
              {item.stack.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </S.TechStack>

            <S.CommonSolutionFooter>
              <p>
                <strong>Entrega:</strong> {item.delivery}
              </p>
              <p>
                <strong>Efeito esperado:</strong> {item.impact}
              </p>
            </S.CommonSolutionFooter>
          </S.CommonSolutionCard>
        ))}
      </S.CommonSolutionsGrid>
    </S.CommonSolutionsSection>
  );
};
