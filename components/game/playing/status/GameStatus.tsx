import PreRound from "./PreRound";
import ActiveRound from "./ActiveRound";
import GameEnded from "./GameEnded";

import type { GameState } from "../../../../lib/types";

function GameStatus({ gamestate }: { gamestate: GameState }) {
  return (
    <>
      {gamestate === "pre" ? <PreRound /> : null}
      {gamestate === "active" ? <ActiveRound /> : null}
      {gamestate === "ended" ? <GameEnded /> : null}
    </>
  );
}

export default GameStatus;
