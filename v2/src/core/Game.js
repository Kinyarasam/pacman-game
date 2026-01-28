import { Pacman } from "../entities/Pacman.js";
import { Maze } from "../map/Maze.js";
import { InputHandler } from "./InputHandler.js";

export class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.canvas = canvas;
        this.lastTime = 0;

        canvas.width = 840;
        canvas.height = 920;

        this.tileSize = 40;

        this.maze = new Maze(this.tileSize);

        this.pacman = new Pacman(1,1, this.tileSize);

        new InputHandler(this.pacman, this.maze);

        this.score = 0;
    }

    start() {
        requestAnimationFrame(this.loop.bind(this));
    }

    loop(timestamp) {
        const delta = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this.update(delta);
        this.render();

        requestAnimationFrame((t) => this.loop(t));
    }

    update(delta) {
        this.pacman.update(this.maze, delta);
        if (this.maze.eatPellet(this.pacman.x, this.pacman.y)) {
            this.score += 10;
        }
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.maze.render(this.ctx);
        this.pacman.render(this.ctx);
        this.renderScore(this.ctx);
    }

    renderScore(ctx) {
        ctx.fillStyle = "white";
        ctx.font = "20px Arial"
        ctx.fillText(`Score: ${this.score}`, 10, 20);
    }
}