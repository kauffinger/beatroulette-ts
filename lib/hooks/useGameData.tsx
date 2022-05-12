import {
  getFirestore,
  doc,
  DocumentReference,
  DocumentData,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { GameState } from "../types";

import useUserData from "./useUserData";

type RoundInfo = [{ name: string }];
type Players = [string];

const useGameData = (gameId: string) => {
  const { user, loading } = useUserData();

  const [admin, setAdmin] = useState("");
  const [isHost, setIsHost] = useState(false);
  const [gamestate, setGamestate] = useState<GameState>("pre");
  const [players, setPlayers] = useState<Players>([""]);
  const [round, setRound] = useState(0);
  const [maxrounds, setMaxrounds] = useState(0);
  const [roundinfo, setRoundinfo] = useState<RoundInfo>([{ name: "" }]);
  const [hasAccess, setHasAccess] = useState(false);
  const [currentSilo, setCurrentSilo] =
    useState<DocumentReference<DocumentData> | null>(null);
  const [siloBPM, setSiloBPM] = useState<number | null>(null);
  const [siloKey, setSiloKey] = useState<string | null>(null);
  const [password, setPassword] = useState("");

  let gameDataQuery = (): null | DocumentReference<DocumentData> => null;
  if (!loading && user && gameId)
    gameDataQuery = () => doc(getFirestore(), "games", gameId);
  const [gameData, gameDataLoading, gameDataError] = useDocumentData(
    gameDataQuery()
  );

  let siloDataQuery = (): null | DocumentReference<DocumentData> => null;
  if (!loading && user && gameId && currentSilo)
    siloDataQuery = () => currentSilo;
  const [siloData] = useDocumentData(siloDataQuery());

  useEffect(() => {
    if (gameData?.players?.includes(user?.uid)) {
      setAdmin(gameData?.admin);
      setGamestate(gameData?.gamestate);
      setPlayers(gameData?.players);
      setRound(gameData?.round);
      setMaxrounds(gameData?.maxrounds);
      setRoundinfo(gameData?.roundinfo);
      setHasAccess(true);
      setIsHost(user?.uid === gameData?.admin);
      setCurrentSilo(
        gameData?.userSiloMapping?.at(gameData?.players?.indexOf(user?.uid))
      );
      setSiloKey(siloData?.files?.at(0)?.key);
      setSiloBPM(siloData?.files?.at(0)?.bpm);
      setPassword(gameData?.password);
    } else {
      setHasAccess(false);
    }
  }, [
    gameData?.admin,
    gameData?.gamestate,
    gameData?.maxrounds,
    gameData?.password,
    gameData?.players,
    gameData?.round,
    gameData?.roundinfo,
    gameData?.userSiloMapping,
    siloData?.files,
    user?.uid,
  ]);
  console.log({
    admin,
    gamestate,
    players,
    round,
    maxrounds,
    roundinfo,
    gameDataLoading,
    gameDataError,
    hasAccess,
    isHost,
    currentSilo,
    siloBPM,
    siloKey,
    password,
  });
  return {
    admin,
    gamestate,
    players,
    round,
    maxrounds,
    roundinfo,
    gameDataLoading,
    gameDataError,
    hasAccess,
    isHost,
    currentSilo,
    siloBPM,
    siloKey,
    password,
  };
};

export default useGameData;
