import { Game } from "./src/core/Game.js";

const canvas = document.getElementById("game");
const game = new Game(canvas);

game.start();
