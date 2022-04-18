import Section from "../Section";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import clsx from "clsx";
import { useInView } from "react-intersection-observer";

import RoundView from "./RoundView";
import type { Silo } from "./DemoData";

interface Props {
  silos: Silo[];
  className?: string;
}

const SilosView = ({ silos, className }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section className={clsx("mt-12 mb-16 md:mt-20", className)}>
      <div
        className="max-w-screen grid grid-cols-2 sm:grid-cols-3 sm:gap-6 gap-2"
        ref={ref}
      >
        {silos.map((silo, i) => (
          <RoundView
            key={i}
            custom={i}
            controls={controls}
            silo={silo.name}
            rounds={silo.rounds}
          />
        ))}
      </div>
    </Section>
  );
};

export default SilosView;
