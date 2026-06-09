import { useEffect, useRef, useState } from "react";

export function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      video
        .play()
        .then(() => setFailed(false))
        .catch(() => setFailed(true));
    };

    tryPlay();
    document.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    return () => document.removeEventListener("touchstart", tryPlay);
  }, []);

  return (
    <>
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_48%]"
        aria-hidden="true"
      />
      {!failed && (
        <video
          ref={videoRef}
          className={`hero-video pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 md:object-[center_48%] ${
            playing ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          aria-hidden="true"
          onLoadedMetadata={(event) => {
            event.currentTarget.play().catch(() => setFailed(true));
          }}
          onCanPlay={(event) => {
            event.currentTarget.play().catch(() => setFailed(true));
          }}
          onPlaying={() => setPlaying(true)}
          onError={() => setFailed(true)}
        />
      )}
    </>
  );
}
