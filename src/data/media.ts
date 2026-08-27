/**
 * Resolve o nome de um arquivo (salvo em `public/products/<slug>/<file>`)
 * para o caminho público que o navegador consegue carregar.
 *
 * Para adicionar imagens de um produto: crie a pasta
 * `public/products/<slug>/` e coloque os arquivos lá; depois referencie
 * só o nome do arquivo em `src/data/systems.ts` (campo `media`).
 */
export const productAsset = (slug: string, file?: string): string | undefined =>
  file ? `/products/${slug}/${file}` : undefined;
