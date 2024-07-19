import { GameManager } from "./store";

const gameStore = GameManager.getInstance();
setInterval(() => {
  gameStore.addGame({
    id: Math.random().toString(),
    whitePlayer: "harkirat",
    blackPlayer: "jaskirat",
    moves: [],
  });
}, 5000);
