import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Section = ({ className, children }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={className}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: {
          x: 0,
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
        },
      }}
      transition={{
        delay: 0.4,
        duration: 0.5,
        damping: 5,
        mass: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
