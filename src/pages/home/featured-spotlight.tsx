import { useEffect, useState } from "react";
import * as S from "./styles";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { axisSystems } from "../../data/systems";
import { productAsset } from "../../data/media";
import { STATUS_LABEL, buildInterfaceBadges, isRealLink } from "./interface-badges";
import { trackEvent } from "../../utils/analytics";

const ACCENT_HEX: Record<string, string> = {
  $brandPrimary: "#00D1FF",
  $brandSecondary: "#D4AF37",
  $brandAccent: "#6E44FF",
};

const resolveAccent = (token?: string) =>
  (token && ACCENT_HEX[token]) || ACCENT_HEX.$brandPrimary;

const AUTO_ADVANCE_MS = 7000;
const IMAGE_ROTATE_MS = 3800;

type GalleryImage = { file: string; alt: string };

/**
 * Remonta (via `key={active.slug}` no chamador) sempre que o destaque ativo
 * muda, o que já reseta `imageIndex` para 0 sem precisar de um efeito extra
 * só para isso.
 */
const SpotlightVisualPanel = ({
  slug,
  name,
  gallery,
  iconSrc,
  accent,
}: {
  slug: string;
  name: string;
  gallery: GalleryImage[];
  iconSrc?: string;
  accent: string;
}) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (gallery.length < 2) return;

    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % gallery.length);
    }, IMAGE_ROTATE_MS);

    return () => clearInterval(timer);
  }, [gallery.length]);

  const currentImage = gallery[imageIndex];
  const imageSrc = currentImage ? productAsset(slug, currentImage.file) : undefined;

  return (
    <S.SpotlightVisual>
      {imageSrc ? (
        <S.SpotlightImage key={imageSrc} src={imageSrc} alt={currentImage?.alt ?? name} />
      ) : (
        <S.SpotlightPlaceholder
          style={{ background: `linear-gradient(160deg, ${accent}33, transparent)` }}
        >
          {iconSrc ? (
            <img
              src={iconSrc}
              alt={`Ícone ${name}`}
              style={{ width: 96, height: 96, borderRadius: 20 }}
            />
          ) : (
            <span style={{ color: accent }}>{name.charAt(0)}</span>
          )}
        </S.SpotlightPlaceholder>
      )}

      {gallery.length > 1 ? (
        <S.SpotlightImageDots>
          {gallery.map((image, index) => (
            <S.SpotlightImageDot key={image.file} active={index === imageIndex} />
          ))}
        </S.SpotlightImageDots>
      ) : null}
    </S.SpotlightVisual>
  );
};

export const FeaturedSpotlight = () => {
  const featured = axisSystems.filter((system) => system.featured);
  const [activeIndex, setActiveIndex] = useState(0);

  const active = featured[activeIndex];
  const gallery = active?.media?.gallery ?? [];

  useEffect(() => {
    if (featured.length < 2) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featured.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(timer);
  }, [activeIndex, featured.length]);

  if (!active) return null;

  const accent = resolveAccent(active.accentColor);
  const iconSrc = productAsset(active.slug, active.media?.icon);

  const goTo = (index: number) => {
    setActiveIndex(index);
    trackEvent({
      event: "spotlight_navigate",
      category: "engagement",
      action: "dot",
      label: featured[index].slug,
    });
  };

  const goRelative = (delta: number) => {
    goTo((activeIndex + delta + featured.length) % featured.length);
  };

  return (
    <S.SpotlightSection id="destaques">
      <div style={{ textAlign: "left" }}>
        <S.Badge>Destaques</S.Badge>
        <h2 style={{ marginTop: "16px", fontSize: "2rem" }}>
          Nossos produtos <span style={{ color: "#00D1FF" }}>em evidência</span>
        </h2>
      </div>

      <S.SpotlightCard style={{ borderTopColor: accent }}>
        <SpotlightVisualPanel
          key={active.slug}
          slug={active.slug}
          name={active.name}
          gallery={gallery}
          iconSrc={iconSrc}
          accent={accent}
        />

        <S.SpotlightContent>
          <S.ProductCardHeader>
            <div>
              <S.ProductCategory>{active.category}</S.ProductCategory>
              <S.MethodTitle style={{ fontSize: "1.75rem", marginBottom: "4px" }}>
                {active.name}
              </S.MethodTitle>
              <S.ProductTagline>{active.tagline}</S.ProductTagline>
            </div>
            <S.StatusBadge status={active.status}>{STATUS_LABEL[active.status]}</S.StatusBadge>
          </S.ProductCardHeader>

          <S.CommonSolutionContext>
            {active.longDescription ?? active.description}
          </S.CommonSolutionContext>

          <S.CommonSolutionList>
            {active.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </S.CommonSolutionList>

          <S.InterfaceList>
            {active.interfaces.flatMap((iface) =>
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
                        action: active.slug,
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

          <S.SpotlightActions>
            {isRealLink(active.primaryLink) ? (
              <S.ProductLinkButton
                href={active.primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent({
                    event: "product_click",
                    category: "engagement",
                    action: "spotlight_primary_link",
                    label: active.slug,
                  })
                }
              >
                Acessar produto
                <FaExternalLinkAlt size={12} />
              </S.ProductLinkButton>
            ) : null}

            <S.ActionButton
              as="button"
              variant="secondary"
              onClick={() => {
                trackEvent({
                  event: "spotlight_view_details",
                  category: "engagement",
                  action: active.slug,
                });
                document
                  .getElementById(`produto-${active.slug}`)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver detalhes
            </S.ActionButton>
          </S.SpotlightActions>
        </S.SpotlightContent>

        {featured.length > 1 ? (
          <S.SpotlightNav>
            <S.SpotlightArrow
              type="button"
              aria-label="Destaque anterior"
              onClick={() => goRelative(-1)}
            >
              <FaChevronLeft size={14} />
            </S.SpotlightArrow>

            <S.SpotlightDots>
              {featured.map((system, index) => (
                <S.SpotlightDot
                  key={system.id}
                  type="button"
                  active={index === activeIndex}
                  aria-label={`Ver ${system.name}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </S.SpotlightDots>

            <S.SpotlightArrow
              type="button"
              aria-label="Próximo destaque"
              onClick={() => goRelative(1)}
            >
              <FaChevronRight size={14} />
            </S.SpotlightArrow>
          </S.SpotlightNav>
        ) : null}
      </S.SpotlightCard>
    </S.SpotlightSection>
  );
};
