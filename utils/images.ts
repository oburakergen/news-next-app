export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  return `${process.env.IMAGE_PATH}/${src}?w=${width}&q=${quality || 75}`;
}
