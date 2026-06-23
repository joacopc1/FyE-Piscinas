import { useEffect, useRef, useState } from "react";

export function HeroVideo({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
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

    let cancelled = false;

    const tryPlay = () => {
      if (cancelled) return;
      video.muted = true;
      video.defaultMuted = true;
      
      // Ensure video source is loaded
      if (video.readyState === 0) {
        video.load();
      }
      
      video.play().catch(() => {
        // iOS can reject autoplay until the first gesture; we keep retrying below.
      });
    };

    tryPlay();

    const retryTimers = [50, 150, 300, 600, 1000, 2000, 3000].map((delay) =>
      window.setTimeout(tryPlay, delay),
    );

    const interactionEvents = ["touchstart", "touchend", "pointerdown", "scroll", "click", "keydown"] as const;
    const onInteraction = () => tryPlay();

    interactionEvents.forEach((eventName) => {
      document.addEventListener(eventName, onInteraction, { passive: true });
    });

    return () => {
      cancelled = true;
      retryTimers.forEach((timer) => window.clearTimeout(timer));
      interactionEvents.forEach((eventName) => {
        document.removeEventListener(eventName, onInteraction);
      });
    };
  }, []);

  if (failed && poster) {
    return (
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_48%]"
      />
    );
  }

  if (failed) return null;

  return (
    <video
      ref={videoRef}
      className="hero-video pointer-events-none absolute inset-0 h-full w-full object-cover object-center md:object-[center_48%]"
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      // @ts-expect-error iOS attribute
      webkit-playsinline="true"
      preload="auto"
      disablePictureInPicture
      // @ts-expect-error iOS attribute
      disableRemotePlayback=""
      controls={false}
      controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
      aria-hidden="true"
      tabIndex={-1}
      onLoadedData={(event) => event.currentTarget.play().catch(() => {})}
      onLoadedMetadata={(event) => event.currentTarget.play().catch(() => {})}
      onCanPlay={(event) => event.currentTarget.play().catch(() => {})}
      onCanPlayThrough={(event) => event.currentTarget.play().catch(() => {})}
      onError={() => setFailed(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
