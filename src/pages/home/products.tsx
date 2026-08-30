import { Link } from "react-router-dom";
import * as S from "./styles";
import { FaExternalLinkAlt } from "react-icons/fa";
import { axisSystems } from "../../data/systems";
import { STATUS_LABEL, buildInterfaceBadges, isRealLink } from "./interface-badges";
import { trackEvent } from "../../utils/analytics";

export const Products = () => {
  return (
    <S.SolutionsSection id="produtos">
      <div style={{ textAlign: "left" }}>
        <S.Badge>Catálogo Completo</S.Badge>
        <h2 style={{ marginTop: "16px", fontSize: "2rem" }}>
          Todos os <span style={{ color: "#D4AF37" }}>Produtos AXIS</span>
        </h2>
        <p
          style={{
            marginTop: "12px",
            maxWidth: "700px",
            color: "#8899A6",
            lineHeight: 1.6,
          }}
        >
          Deixamos de vender apenas horas de consultoria: hoje projetamos e
          operamos produtos próprios, prontos para resolver problemas reais,
          cada um com suas próprias interfaces — apps, web e integrações.
        </p>
      </div>

      <S.SolutionsGrid>
        {axisSystems.map((system) => (
          <S.SolutionCard key={system.id} id={`produto-${system.slug}`}>
            <S.ProductCardHeader>
              <div>
                <S.ProductCategory>{system.category}</S.ProductCategory>
                <S.MethodTitle style={{ marginBottom: "4px" }}>
                  {system.name}
                </S.MethodTitle>
                <S.ProductTagline>{system.tagline}</S.ProductTagline>
              </div>
              <S.StatusBadge status={system.status}>
                {STATUS_LABEL[system.status]}
              </S.StatusBadge>
            </S.ProductCardHeader>

            <S.CommonSolutionContext>{system.description}</S.CommonSolutionContext>

            <S.CommonSolutionLabel>Destaques</S.CommonSolutionLabel>
            <S.CommonSolutionList>
              {system.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </S.CommonSolutionList>

            <S.CommonSolutionLabel>Interfaces</S.CommonSolutionLabel>
            <S.InterfaceList>
              {system.interfaces.flatMap((iface) =>
                buildInterfaceBadges(iface).map((badge) =>
                  badge.href ? (
                    <S.InterfaceBadge
                      key={badge.key}
                      href={badge.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent({
                          event: "product_interface_click",
                          category: "engagement",
                          action: system.slug,
                          label: badge.key,
                        })
                      }
                    >
                      {badge.icon}
                      {badge.label}
                    </S.InterfaceBadge>
                  ) : (
                    <S.InterfaceBadge as="span" key={badge.key} disabled>
                      {badge.icon}
                      {badge.label}
                    </S.InterfaceBadge>
                  )
                )
              )}
            </S.InterfaceList>

            <S.TechStack>
              {system.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </S.TechStack>

            <S.ProductFooter>
              {isRealLink(system.primaryLink) ? (
                <S.ProductLinkButton
                  href={system.primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent({
                      event: "product_click",
                      category: "engagement",
                      action: "primary_link",
                      label: system.slug,
                    })
                  }
                >
                  Acessar produto
                  <FaExternalLinkAlt size={12} />
                </S.ProductLinkButton>
              ) : null}

              <S.ActionButton
                as={Link}
                to={`/${system.slug}`}
                variant="secondary"
                onClick={() =>
                  trackEvent({
                    event: "product_click",
                    category: "engagement",
                    action: "product_page_link",
                    label: system.slug,
                  })
                }
              >
                Ver página do produto
              </S.ActionButton>
            </S.ProductFooter>
          </S.SolutionCard>
        ))}
      </S.SolutionsGrid>
    </S.SolutionsSection>
  );
};
