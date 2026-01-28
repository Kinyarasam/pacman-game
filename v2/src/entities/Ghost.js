export class Ghost {
    constructor(col, row, tileSize, color = "red") {
        this.col = col;
        this.row = row;
        this.tileSize = tileSize;

        this.x = col * tileSize + tileSize / 2;
        this.y = row * tileSize + tileSize / 2;

        this.currentDir = { x: 0, y: 0 }
        this.speed = 2;
        this.color = color;
    }

    update(maze) {
        if (this.isCentered()) {
            this.chooseDirection(maze);
        }

        this.x += this.currentDir.x * this.speed;
        this.y += this.currentDir.y * this.speed;

        this.col = Math.floor(this.x / this.tileSize);
        this.row = Math.floor(this.y / this.tileSize);
    }

    isCentered() {
        const cx = this.col * this.tileSize + this.tileSize / 2;
        const cy = this.row * this.tileSize + this.tileSize / 2;

        return Math.abs(this.x - cx) < 1 && Math.abs(this.y - cy) < 1;
    }

    canMove(dir, maze) {
        const nextCol = this.col + dir.x;
        const nextRow = this.row + dir.y;

        return !maze.isWall(nextCol, nextRow);
    }

    chooseDirection(maze) {
        const directions = [
            { x: 1, y: 0 },
            { x: -1, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: -1 },
        ];

        const valid = directions.filter(d => this.canMove(d, maze));

        if (valid.length === 0) {
            this.currentDir = { x: 0, y: 0 };
            return;
        }

        this.currentDir = valid[Math.floor(Math.random() * valid.length)];
    }

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.tileSize / 2 - 4, 0, Math.PI * 2);
        ctx.fill();
    }
}