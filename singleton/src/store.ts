interface Game {
  id: string;
  whitePlayer: string;
  blackPlayer: string;
  moves: string[];
}

export class GameManager {
  private static instance: GameManager;
  private games: Game[] = [];

  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = new GameManager();
    }
    return this.instance;
  }

  public addGame(game: Game) {
    console.log("Adding game", game);
    this.games.push(game);
  }

  public getGames() {
    return this.games;
  }

  // e5e7
  public addMove(gameId: string, move: string) {
    const game = this.games.find((game) => game.id === gameId);
    if (game) {
      game.moves.push(move);
    }
  }
}
