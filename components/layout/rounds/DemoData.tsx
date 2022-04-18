export interface Round {
  name: string;
  filename: string;
  player: string;
}

export interface Silo {
  name: string;
  rounds: Round[];
}

export const silosAfterFirstRound: Silo[] = [
  {
    name: "1",
    rounds: [{ name: "Drums", filename: "drums.wav", player: "Player 1" }],
  },
  {
    name: "2",
    rounds: [{ name: "Drums", filename: "drums.wav", player: "Player 2" }],
  },
  {
    name: "3",
    rounds: [{ name: "Drums", filename: "drums.wav", player: "Player 3" }],
  },
  {
    name: "4",
    rounds: [{ name: "Drums", filename: "drums.wav", player: "Player 4" }],
  },
  {
    name: "5",
    rounds: [{ name: "Drums", filename: "drums.wav", player: "Player 5" }],
  },
  {
    name: "6",
    rounds: [{ name: "Drums", filename: "drums.wav", player: "Player 6" }],
  },
];

export const silosAfterSecondRound: Silo[] = [
  {
    name: "1",
    rounds: [
      { name: "Drums", filename: "drums.wav", player: "Player 1" },
      { name: "Sample", filename: "sample.wav", player: "Player 6" },
    ],
  },
  {
    name: "2",
    rounds: [
      { name: "Drums", filename: "drums.wav", player: "Player 2" },
      { name: "Sample", filename: "sample.wav", player: "Player 1" },
    ],
  },
  {
    name: "3",
    rounds: [
      { name: "Drums", filename: "drums.wav", player: "Player 3" },
      { name: "Sample", filename: "sample.wav", player: "Player 2" },
    ],
  },
  {
    name: "4",
    rounds: [
      { name: "Drums", filename: "drums.wav", player: "Player 4" },
      { name: "Sample", filename: "sample.wav", player: "Player 3" },
    ],
  },
  {
    name: "5",
    rounds: [
      { name: "Drums", filename: "drums.wav", player: "Player 5" },
      { name: "Sample", filename: "sample.wav", player: "Player 4" },
    ],
  },
  {
    name: "6",
    rounds: [
      { name: "Drums", filename: "drums.wav", player: "Player 6" },
      { name: "Sample", filename: "sample.wav", player: "Player 5" },
    ],
  },
];
