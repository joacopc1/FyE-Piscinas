import { motion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
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
  const [animateState, setAnimateState] = useState("hidden");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateState("show");
    }, 1000); // 1-second fallback to force visibility if viewport observer fails
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={animateState}
      onViewportEnter={() => setAnimateState("show")}
      viewport={{ once: true, amount: 0.05, margin: "0px 0px -10% 0px" }}
      transition={{ delay }}
      className={className}
      style={{ willChange: "opacity, transform" }}
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
  const [animateState, setAnimateState] = useState("hidden");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateState("show");
    }, 1200); // 1.2-second fallback to force stagger items visibility
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate={animateState}
      onViewportEnter={() => setAnimateState("show")}
      viewport={{ once: true, amount: 0.01, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileTap={{ scale: 0.985 }}
      className={className}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}


