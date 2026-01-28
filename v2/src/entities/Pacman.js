export class pacman {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 2;

        this.direction = { x: 0, y: 1};
    }

    setDirection(dir) {
        this.direction = dir;
    }

    update(maze) {
        const nextX = this.x + this.direction.x * this.speed
        const nextY = this.y + this.direction.y * this.speed;

        if (!maze.isWall(nextX, nextY)) {
            this.x = nextX;
            this.y = nextY;
        }
    }

    render(ctx) {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0.2 * Math.PI, 1.8 * Math.PI);
        ctx.lineTo(this.x, this.y);
        ctx.fill();
    }
}