import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function useReliableReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible || typeof window === "undefined") return;

    const element = ref.current;
    if (!element) return;

    let observer: IntersectionObserver | null = null;
    const reveal = () => setIsVisible(true);

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting || entry.intersectionRatio > 0)) {
            reveal();
          }
        },
        {
          root: null,
          rootMargin: "0px 0px -8% 0px",
          threshold: [0, 0.05],
        },
      );
      observer.observe(element);
    } else {
      // Fallback for older browsers
      reveal();
    }

    return () => {
      observer?.disconnect();
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
