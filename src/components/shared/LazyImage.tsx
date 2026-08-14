interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

/**
 * Simple lazy-loaded image component.
 * Uses original image files directly — no WebP pipeline.
 */
export default function LazyImage({ src, alt, className = "" }: LazyImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      decoding="async"
    />
  );
}
