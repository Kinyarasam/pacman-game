export class InputHandler {
    constructor(pacman) {
        window.addEventListener("keydown", e => {
            switch (e.key) {
                case "ArrowUp":
                    pacman.setDirection({ x: 0, y: -1 });
                    break;
                case "ArrowDown":
                    pacman.setDirection({ x: 0, y: 1 });
                    break;
                case "ArrowLeft":
                    pacman.setDirection({ x: -1, y: 0 });
                    break;
                case "ArrowRight":
                    pacman.setDirection({ x: 1, y: 0 });
                    break;
            }
        });
    }
}
