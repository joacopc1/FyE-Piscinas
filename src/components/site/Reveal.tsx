import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export const variantsMap: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        mass: 0.8,
      },
    },
  },
  fadeUp3D: {
    hidden: { opacity: 0, y: 45, scale: 0.94, rotateX: 12 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 65,
        damping: 15,
        mass: 0.85,
      },
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -35 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        mass: 0.8,
      },
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 35 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        mass: 0.8,
      },
    },
  },
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
  variant = "fadeUp",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "fadeUp" | "fadeUp3D" | "slideInLeft" | "slideInRight";
}) {
  const { ref, isVisible } = useReliableReveal<HTMLDivElement>();
  const reduceMotion = useReducedMotion();
  const shouldShow = isVisible || reduceMotion;

  return (
    <motion.div
      ref={ref}
      variants={variantsMap[variant]}
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
  variant?: "fadeUp" | "fadeUp3D" | "slideInLeft" | "slideInRight";
};

export function StaggerItem({ children, className, variant = "fadeUp", ...props }: StaggerItemProps) {
  return (
    <motion.div variants={variantsMap[variant]} className={className} {...props}>
      {children}
    </motion.div>
  );
}
