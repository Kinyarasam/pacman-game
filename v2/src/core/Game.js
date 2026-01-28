import { pacman } from "../entities/Pacman.js";
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
        this.pacman.update();
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.pacman.render(this.ctx);
    }
}