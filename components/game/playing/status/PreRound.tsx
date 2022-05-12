import { Loader } from "@mantine/core";

function PreRound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Loader />
      <h1 className="text-accent text-2xl uppercase font-extrabold mt-4 text-center">
        Waiting for host to start round
      </h1>
    </div>
  );
}

export default PreRound;
