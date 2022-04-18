import { AnimationControls, motion } from "framer-motion";
import type { Round } from "./DemoData";

interface Props {
  silo: string;
  controls: AnimationControls;
  custom: number;
  rounds: Round[];
}

const RoundView = ({ silo, rounds, controls, custom }: Props) => {
  return (
    <motion.div
      className="pt-2 pb-3 px-1 sm:pt-3 sm:pb-4 sm:px-2 text-center border-2 border-daccent rounded-md flex flex-col"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {
          opacity: 0,
        },
        hover: {
          y: -3,
        },
      }}
      animate={controls}
      custom={custom}
    >
      <p className="text-rgray-50">
        <b>Silo {silo}</b>
      </p>
      {rounds.map((round, i) => {
        return (
          <div
            className="flex text-rgray-50 justify-between mx-1 sm:mx-2"
            key={i}
          >
            <b className="mr-2">{round.player}</b>
            <span>{round.filename}</span>
          </div>
        );
      })}
    </motion.div>
  );
};

export default RoundView;
