import { Functions, getFunctions, HttpsCallable, httpsCallable } from "firebase/functions";
// import app from "./firebase"; # Uncomment if build fails in prod
const functions: Functions = getFunctions();

export const joinGameWithPassword : HttpsCallable<any, any> = httpsCallable(functions, "joinGameWithPassword");
export const createGame : HttpsCallable<any, any> = httpsCallable(functions, "createGame");
export const endGame : HttpsCallable<any, any> = httpsCallable(functions, "endGame");
export const startRound : HttpsCallable<any, any> = httpsCallable(functions, "startRound");
export const stopRound : HttpsCallable<any, any> = httpsCallable(functions, "stopRound");