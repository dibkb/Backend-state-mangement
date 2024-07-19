"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const store = new store_1.GameStore();
setInterval(() => {
    store.addGame({
        id: Math.random().toString(),
        whitePlayer: "Jack",
        blackPlayer: "Tom",
    });
}, 5000);
