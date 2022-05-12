import { useState } from "react";
import { Loader } from "@mantine/core";

import { startRound, stopRound, endGame } from "../../../../lib/functions";
import AppButton from "../../../ui/AppButton";
import { showNotification } from "@mantine/notifications";
import { CircleCheck } from "tabler-icons-react";
import {
  notifyFailure,
  notifyStart,
  notifySuccess,
} from "../../../../lib/notifications/processing";
import { GameState } from "../../../../lib/types";

type Props = {
  gameId: string;
  gamestate: GameState;
  round: number;
  password: string;
};

function Dashboard({ gameId, gamestate, round, password }: Props) {
  const startRoundHandler = async () => {
    const notificationId = "start-game-round";
    notifyStart({
      id: notificationId,
      title: "Starting round...",
    });
    const res = await startRound({ gameId: gameId });
    if (res.data.started) {
      notifySuccess({
        id: notificationId,
        title: "Round started!",
        message: res.data.info,
      });
      return;
    }
    notifyFailure({
      id: notificationId,
      title: "Failed to start round",
      message: res.data.info,
    });
  };

  const stopRoundHandler = async () => {
    const notificationId = "stop-game-round";
    notifyStart({
      id: notificationId,
      title: "Stopping round...",
    });
    const res = await stopRound({ gameId: gameId });
    if (res.data.stopped) {
      notifySuccess({
        id: notificationId,
        title: res.data.info,
        message: "Go.",
      });
      return;
    }
    notifyFailure({
      id: notificationId,
      title: "Failed to stop round",
      message: res.data.info,
    });
  };

  const endGameHandler = async () => {
    const notificationId = "end-game";
    notifyStart({
      id: notificationId,
      title: "Ending game...",
    });
    const res = await endGame({ gameId: gameId });
    if (res.data.deleted) {
      notifySuccess({
        id: notificationId,
        title: res.data.info,
        message: "Let's go again!",
      });
      return;
    }
    notifyFailure({
      id: notificationId,
      title: "Failed to end game.",
      message: res.data.info,
    });
  };

  return (
    <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 inline-flex mx-auto justify-between border-2 border-accent w-11/12 rounded-lg">
      <AppButton
        className="text-xl flex-grow items-center justify-center"
        onClick={startRoundHandler}
      >
        Start Round
      </AppButton>

      <AppButton
        className="text-xl flex-grow items-center justify-center"
        onClick={stopRoundHandler}
      >
        Stop Round
      </AppButton>

      {gamestate === "ended" && (
        <AppButton
          className="text-xl flex-grow items-center justify-center"
          isDangerous
          onClick={endGameHandler}
        >
          End Game
        </AppButton>
      )}

      {round === 0 && (
        <AppButton
          className="text-xl flex-grow items-center justify-center"
          onClick={async () => {
            navigator.clipboard.writeText(password);
            showNotification({
              id: "password-copied",
              disallowClose: false,
              autoClose: 3000,
              title: "Password copied!",
              message: "Now you can share the password with your friends.",
              color: "teal",
              loading: false,
              icon: <CircleCheck />,
            });
          }}
        >
          Copy Password
        </AppButton>
      )}
    </div>
  );
}

export default Dashboard;
