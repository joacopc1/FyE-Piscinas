import { useEffect, useRef, useState } from "react";

export function HeroVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Force muted + inline attributes for iOS autoplay
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    let cancelled = false;

    const tryPlay = () => {
      if (cancelled) return;
      video
        .play()
        .then(() => {
          if (!cancelled) setPlaying(true);
        })
        .catch(() => {});
    };

    // Attempt autoplay immediately
    tryPlay();

    // Aggressive retries — iOS Safari sometimes needs the video to be
    // fully decoded before it will honour autoplay on a muted video.
    const t1 = setTimeout(tryPlay, 100);
    const t2 = setTimeout(tryPlay, 300);
    const t3 = setTimeout(tryPlay, 600);
    const t4 = setTimeout(tryPlay, 1200);
    const t5 = setTimeout(tryPlay, 2500);

    // Also try on any user interaction (scroll, touch, click)
    const interactionEvents = ["touchstart", "touchmove", "scroll", "click", "keydown"] as const;
    const onInteraction = () => {
      tryPlay();
      // Remove all listeners after first successful interaction
      interactionEvents.forEach((evt) =>
        document.removeEventListener(evt, onInteraction)
      );
    };
    interactionEvents.forEach((evt) =>
      document.addEventListener(evt, onInteraction, { once: false, passive: true })
    );

    return () => {
      cancelled = true;
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      interactionEvents.forEach((evt) =>
        document.removeEventListener(evt, onInteraction)
      );
    };
  }, []);

  if (failed) return null;

  return (
    <video
      ref={videoRef}
      className={`hero-video pointer-events-none absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 md:object-[center_48%] ${
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
      onLoadedData={(e) => e.currentTarget.play().catch(() => {})}
      onLoadedMetadata={(e) => e.currentTarget.play().catch(() => {})}
      onCanPlay={(e) => e.currentTarget.play().catch(() => {})}
      onCanPlayThrough={(e) => e.currentTarget.play().catch(() => {})}
      onPlaying={() => setPlaying(true)}
      onError={() => setFailed(true)}
    />
  );
}
