export class pacman {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = 2;
    }

    update() {}

    render(ctx) {
        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0.2 * Math.PI, 1.8 * Math.PI);
        ctx.lineTo(this.x, this.y);
        ctx.fill();
    }
}