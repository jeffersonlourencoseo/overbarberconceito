import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/img/*.jpg', { eager: true });

export const img = (name: string): ImageMetadata => {
  const hit = files[`../assets/img/${name}.jpg`];
  if (!hit) throw new Error(`Imagem não encontrada: ${name}`);
  return hit.default;
};
