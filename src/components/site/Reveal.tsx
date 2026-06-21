import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08, margin: "0px 0px -5% 0px" });
  const reduceMotion = useReducedMotion();
  const [fallbackTriggered, setFallbackTriggered] = useState(false);

  useEffect(() => {
    const isIOS = typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
      const timer = setTimeout(() => {
        setFallbackTriggered(true);
      }, 2500); // 2.5-second safety fallback on iOS Safari
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={isInView || fallbackTriggered || reduceMotion ? "show" : "hidden"}
      transition={{ delay }}
      className={className}
      style={{ willChange: isInView ? "auto" : "opacity, transform" }}
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.06, margin: "0px 0px -5% 0px" });
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView || reduceMotion ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
      style={{ willChange: isInView ? "auto" : "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} className={className}>
      {children}
    </motion.div>
  );
}
