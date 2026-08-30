import { useEffect, useState } from "react";
import * as S from "./styles";
import { productAsset } from "../../data/media";

const IMAGE_ROTATE_MS = 3800;

export type GalleryImage = { file: string; alt: string };

/**
 * Painel de imagem usado no carrossel de destaque e na página do produto.
 * Passe `key={slug}` no chamador para remontar (e resetar o índice da
 * imagem) sempre que o produto exibido mudar, sem precisar de um efeito
 * extra só para isso.
 */
export const SpotlightVisualPanel = ({
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
