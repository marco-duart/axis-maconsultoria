import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt, FaWhatsapp } from "react-icons/fa";
import { createTheme } from "../../assets/styles/stitches.config";
import { axisSystems } from "../../data/systems";
import { productAsset } from "../../data/media";
import { STATUS_LABEL, buildInterfaceBadges, isRealLink } from "../home/interface-badges";
import { SpotlightVisualPanel } from "../home/spotlight-visual-panel";
import * as H from "../home/styles";
import * as S from "./styles";
import { trackEvent } from "../../utils/analytics";

export const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const system = useMemo(() => axisSystems.find((item) => item.slug === slug), [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const themeClass = useMemo(() => {
    if (!system) return undefined;

    return createTheme({
      colors: {
        brandPrimary: system.theme.primary,
        brandSecondary: system.theme.secondary,
        bgPrimary: system.theme.background,
        bgSecondary: system.theme.surface,
        textHighContrast: system.theme.text,
      },
    });
  }, [system]);

  if (!system) {
    return (
      <S.NotFoundWrapper>
        <h1>Produto não encontrado</h1>
        <p>O produto que você procura não existe ou foi removido.</p>
        <H.ActionButton as={Link} to="/" variant="primary">
          Voltar para a home
        </H.ActionButton>
      </S.NotFoundWrapper>
    );
  }

  const iconSrc = productAsset(system.slug, system.media?.icon);
  const gallery = system.media?.gallery ?? [];
  const whatsappUrl = `https://wa.me/5562994069668?text=${encodeURIComponent(
    `Olá, vi a página do ${system.name} no site da M.A. AXIS e quero saber mais.`
  )}`;

  return (
    <div className={themeClass}>
      <S.ThemedScreen>
        <S.BackLink to="/#produtos">
          <FaArrowLeft size={12} />
          Todos os produtos
        </S.BackLink>

        <S.HeroGrid>
          <SpotlightVisualPanel
            key={system.slug}
            slug={system.slug}
            name={system.name}
            gallery={gallery}
            iconSrc={iconSrc}
            accent={system.theme.primary}
          />

          <H.SpotlightContent>
            <H.ProductCardHeader>
              <div>
                <H.ProductCategory>{system.category}</H.ProductCategory>
                <h1 style={{ fontSize: "2rem", marginBottom: "4px" }}>{system.name}</h1>
                <H.ProductTagline>{system.tagline}</H.ProductTagline>
              </div>
              <H.StatusBadge status={system.status}>{STATUS_LABEL[system.status]}</H.StatusBadge>
            </H.ProductCardHeader>

            <H.CommonSolutionContext>
              {system.longDescription ?? system.description}
            </H.CommonSolutionContext>

            <H.CommonSolutionLabel>Destaques</H.CommonSolutionLabel>
            <H.CommonSolutionList>
              {system.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </H.CommonSolutionList>

            <H.CommonSolutionLabel>Interfaces</H.CommonSolutionLabel>
            <H.InterfaceList>
              {system.interfaces.flatMap((iface) =>
                buildInterfaceBadges(iface).map((badge) =>
                  badge.href ? (
                    <H.InterfaceBadge
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
                    </H.InterfaceBadge>
                  ) : (
                    <H.InterfaceBadge as="span" key={badge.key} disabled>
                      {badge.icon}
                      {badge.label}
                    </H.InterfaceBadge>
                  )
                )
              )}
            </H.InterfaceList>

            <H.TechStack>
              {system.technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </H.TechStack>

            <S.ProductActions>
              {isRealLink(system.primaryLink) ? (
                <H.ProductLinkButton
                  href={system.primaryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent({
                      event: "product_click",
                      category: "engagement",
                      action: "product_page_primary_link",
                      label: system.slug,
                    })
                  }
                >
                  Acessar produto
                  <FaExternalLinkAlt size={12} />
                </H.ProductLinkButton>
              ) : null}

              <H.ActionButton
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                onClick={() =>
                  trackEvent({
                    event: "cta_click",
                    category: "engagement",
                    action: "whatsapp_contact",
                    label: `product_page_${system.slug}`,
                  })
                }
              >
                <FaWhatsapp size={16} />
                Falar sobre este produto
              </H.ActionButton>
            </S.ProductActions>
          </H.SpotlightContent>
        </S.HeroGrid>
      </S.ThemedScreen>
    </div>
  );
};
