import { useState, useEffect } from "react";

import { useRouter } from "next/router";
import Link from "next/link";

import AppButton from "../../../components/ui/AppButton";
import AuthGate from "../../../components/auth/AuthGate";
import Page from "../../../components/layout/Page";

import useGameData from "../../../lib/hooks/useGameData";
import Section from "../../../components/layout/Section";
import GameStatus from "../../../components/game/playing/status/GameStatus";
import Dashboard from "../../../components/game/playing/admin/Dashboard";

function PlayPage() {
  const router = useRouter();
  const gameId = router.query.gameId as string;
  const [currentRoundInfo, setCurrentRoundInfo] = useState({ name: "" });
  const {
    admin,
    gamestate,
    players,
    round,
    maxrounds,
    roundinfo,
    hasAccess,
    isHost,
    currentSilo,
    siloBPM,
    siloKey,
    password,
    gameDataLoading,
  } = useGameData(gameId);

  useEffect(() => {
    setCurrentRoundInfo(roundinfo.at(round) as { name: string });
  }, [roundinfo, round]);

  return (
    <Page>
      <AuthGate>
        <Section className="flex flex-col flex-1 items-center justify-center bg-rgray-900 h-full pt-24 pb-24 w-full">
          {hasAccess && !gameDataLoading ? (
            <GameStatus gamestate={gamestate} />
          ) : (
            <p>No access</p>
          )}
          {isHost && (
            <Dashboard
              gameId={gameId}
              gamestate={gamestate}
              round={round}
              password={password}
            />
          )}
        </Section>
      </AuthGate>
    </Page>
  );
}

export default PlayPage;
