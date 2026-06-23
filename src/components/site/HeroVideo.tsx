import { useEffect, useRef, useState } from "react";

export function HeroVideo({ src, poster }: { src: string; poster?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(true); // Default to true (show fallback first)

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create the video element programmatically
    const video = document.createElement("video");
    video.className = "hero-video pointer-events-none absolute inset-0 h-full w-full object-cover object-center md:object-[center_48%]";
    if (poster) {
      video.poster = poster;
    }

    // Set attributes for native iOS Safari autoplay compatibility
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    video.setAttribute("autoplay", "");
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.setAttribute("preload", "auto");
    video.setAttribute("controlslist", "nodownload nofullscreen noremoteplayback noplaybackrate");
    video.setAttribute("aria-hidden", "true");
    video.tabIndex = -1;

    // Create the source child element
    const source = document.createElement("source");
    source.src = src;
    source.type = "video/mp4";
    video.appendChild(source);

    // Append to DOM container
    container.appendChild(video);

    // Play execution helper
    let cancelled = false;
    const tryPlay = () => {
      if (cancelled) return;
      video.muted = true;
      video.defaultMuted = true;
      video.play()
        .then(() => {
          setFailed(false);
        })
        .catch(() => {
          setFailed(true);
        });
    };

    video.load();
    tryPlay();

    // Aggressive retries for iOS Safari autoplay
    const retryTimers = [50, 150, 300, 600, 1000, 2000, 3000].map((delay) =>
      window.setTimeout(tryPlay, delay),
    );

    // Interaction triggers to catch cases where iOS blocks autoplay initially (like Low Power Mode)
    const interactionEvents = ["touchstart", "touchend", "pointerdown", "scroll", "click", "keydown"] as const;
    const onInteraction = () => tryPlay();

    interactionEvents.forEach((eventName) => {
      document.addEventListener(eventName, onInteraction, { passive: true });
    });

    // Handle failure
    video.onerror = () => setFailed(true);

    return () => {
      cancelled = true;
      retryTimers.forEach((timer) => window.clearTimeout(timer));
      interactionEvents.forEach((eventName) => {
        document.removeEventListener(eventName, onInteraction);
      });
      video.pause();
      video.remove();
    };
  }, [src, poster]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-transparent">
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover object-center md:object-[center_48%] transition-opacity duration-500 ${
            failed ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      <div
        ref={containerRef}
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          failed ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
