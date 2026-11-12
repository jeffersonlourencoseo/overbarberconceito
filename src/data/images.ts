import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.jpg', { eager: true });

export const img = (name: string): ImageMetadata => {
  const hit = files[`../assets/img/${name}.jpg`];
  if (!hit) throw new Error(`Imagem não encontrada: ${name}`);
  return hit.default;
};

/*
 * Fotos dos cards, escolhidas pelo nome do arquivo.
 * Coloque a foto em src/assets/img/<pasta>/<slug>.jpg (ou .jpeg, .png, .webp).
 * Sem arquivo, o card aparece só com texto.
 */
export type PhotoFolder = 'servicos' | 'dia-do-noivo' | 'blog';

const named = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/img/{servicos,dia-do-noivo,blog}/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true },
);

const byKey = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(named)) {
  const m = path.match(/img\/([^/]+)\/([^/]+)\.[a-z]+$/i);
  if (m) byKey.set(`${m[1]}/${m[2].toLowerCase()}`, mod.default);
}

export const photo = (folder: PhotoFolder, slug: string): ImageMetadata | undefined =>
  byKey.get(`${folder}/${slug.toLowerCase()}`);
