import { useState, useEffect, useRef, useCallback } from "react";

interface VideoBackgroundProps {
  mp4: string;
  webm: string;
  poster: string;
  fallbackImages: string[];
  overlay?: string;
}

export default function VideoBackground({
  mp4,
  webm,
  poster,
  fallbackImages,
  overlay = "rgba(0, 85, 135, 0.5)",
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  // Slideshow fallback — crossfade every 6 seconds
  useEffect(() => {
    if (!videoError || fallbackImages.length <= 1) return;

    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % fallbackImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [videoError, fallbackImages.length]);

  const handleError = useCallback(() => {
    setVideoError(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video layer */}
      {!videoError && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={poster}
          onError={handleError}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={mp4} type="video/mp4" />
          <source src={webm} type="video/webm" />
        </video>
      )}

      {/* Slideshow fallback */}
      {videoError &&
        fallbackImages.map((img, i) => (
          <div
            key={img}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: i === slideIndex ? 1 : 0,
            }}
          />
        ))}

      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: overlay }} />
    </div>
  );
}
