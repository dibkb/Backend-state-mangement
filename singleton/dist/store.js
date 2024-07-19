"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameStore = void 0;
class GameStore {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addGame({ id, whitePlayer, blackPlayer }) {
        const newGame = {
            id,
            whitePlayer,
            blackPlayer,
            moves: [],
        };
        console.log("Adding game", newGame);
        this.addGame(newGame);
    }
    getGame(id) {
        const match = this.games.find((game) => game.id === id);
        if (match)
            return match;
    }
    addMove(id, move) {
        const match = this.games.find((game) => game.id === id);
        match === null || match === void 0 ? void 0 : match.moves.push(move);
    }
}
exports.GameStore = GameStore;
