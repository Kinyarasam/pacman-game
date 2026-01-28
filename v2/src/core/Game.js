import { pacman } from "../entities/Pacman.js";
import { Maze } from "../map/Maze.js";
import { InputHandler } from "./InputHandler.js";

export class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.lastTime = 0;

        canvas.width = 640;
        canvas.height = 640;

        this.pacman = new pacman(320, 320, 20);
        new InputHandler(this.pacman);

        this.maze = new Maze(40);
    }

    start() {
        requestAnimationFrame(this.loop.bind(this));
    }

    loop() {
        this.update();
        this.render();

        requestAnimationFrame(this.loop.bind(this));
    }

    update() {
        this.pacman.update(this.maze);
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.maze.render(this.ctx);
        this.pacman.render(this.ctx);
    }
}