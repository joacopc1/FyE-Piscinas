import { useEffect, useRef, useState } from "react";

export function HeroVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

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
        .then(() => setPlaying(true))
        .catch(() => {});
    };

    tryPlay();
    document.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    return () => document.removeEventListener("touchstart", tryPlay);
  }, []);

  return (
    <>
      {!failed && (
        <video
          ref={videoRef}
          className={`hero-video pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 md:object-[center_48%] ${
            playing ? "opacity-100" : "opacity-0"
          }`}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          // @ts-expect-error iOS attribute
          disableRemotePlayback=""
          controls={false}
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          aria-hidden="true"
          tabIndex={-1}
          onLoadedMetadata={(event) => {
            event.currentTarget.play().catch(() => {});
          }}
          onCanPlay={(event) => {
            event.currentTarget.play().catch(() => {});
          }}
          onPlaying={() => setPlaying(true)}
          onError={() => setFailed(true)}
        />
      )}
    </>
  );
}


