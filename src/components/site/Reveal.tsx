import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function isInsideRevealZone(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

  return rect.top <= viewportHeight * 0.9 && rect.bottom >= viewportHeight * 0.02;
}

function useReliableReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible || typeof window === "undefined") return;

    const element = ref.current;
    if (!element) return;

    let animationFrame = 0;
    let observer: IntersectionObserver | null = null;

    const reveal = () => setIsVisible(true);

    const checkPosition = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        const current = ref.current;
        if (current && isInsideRevealZone(current)) {
          reveal();
        }
      });
    };

    checkPosition();

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting || entry.intersectionRatio > 0)) {
            reveal();
          }
        },
        {
          root: null,
          rootMargin: "0px 0px 18% 0px",
          threshold: [0, 0.01, 0.08],
        },
      );
      observer.observe(element);
    }

    const events = ["scroll", "resize", "orientationchange", "touchmove", "touchend"] as const;
    events.forEach((eventName) => {
      window.addEventListener(eventName, checkPosition, { passive: true });
    });

    const firstCheck = window.setTimeout(checkPosition, 120);
    const secondCheck = window.setTimeout(checkPosition, 700);
    const interval = window.setInterval(checkPosition, 450);
    const finalSafety = window.setTimeout(reveal, 9000);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      observer?.disconnect();
      events.forEach((eventName) => {
        window.removeEventListener(eventName, checkPosition);
      });
      window.clearTimeout(firstCheck);
      window.clearTimeout(secondCheck);
      window.clearInterval(interval);
      window.clearTimeout(finalSafety);
    };
  }, [isVisible]);

  return { ref, isVisible };
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isVisible } = useReliableReveal<HTMLDivElement>();
  const reduceMotion = useReducedMotion();
  const shouldShow = isVisible || reduceMotion;

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={shouldShow ? "show" : "hidden"}
      transition={{ delay }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const { ref, isVisible } = useReliableReveal<HTMLDivElement>();
  const reduceMotion = useReducedMotion();
  const shouldShow = isVisible || reduceMotion;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldShow ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = Omit<HTMLMotionProps<"div">, "variants"> & {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({ children, className, ...props }: StaggerItemProps) {
  return (
    <motion.div variants={fadeUp} className={className} {...props}>
      {children}
    </motion.div>
  );
}
