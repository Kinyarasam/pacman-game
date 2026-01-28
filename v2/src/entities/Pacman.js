export class Pacman {
    constructor(startCol, startRow, tileSize) {
        this.tileSize = tileSize;

        this.col = startCol;
        this.row = startRow;

        this.x = this.col * tileSize + tileSize / 2;
        this.y = this.row * tileSize + tileSize / 2;

        this.currentDir = { x: 0, y: 1 };
        this.nextDir = this.currentDir;

        this.speed = 2;

        this.mouthOpen = true;
        this.mouthTimer = 0;
        this.mouthSpeed = 120;
        this.angle = 0;
    }

    setDirection(dir) {
        this.nextDir = dir;
    }

    update(maze, delta) {
        if (this.isCentered()) {
            if (this.canMove(this.nextDir, maze)) {
                this.currentDir = this.nextDir;
            }

            if (!this.canMove(this.currentDir, maze)) {
                this.currentDir = { x: 0, y: 0 };
            }
        }

        this.x += this.currentDir.x * this.speed;
        this.y += this.currentDir.y * this.speed;

        this.col = Math.floor(this.x / this.tileSize);
        this.row = Math.floor(this.y / this.tileSize);

        this.mouthTimer += delta;
        if (this.mouthTimer > this.mouthSpeed) {
            this.mouthOpen = !this.mouthOpen;
            this.mouthTimer = 0;
        }
    }

    isCentered() {
        const cx = this.col * this.tileSize + this.tileSize / 2;
        const cy = this.row * this.tileSize + this.tileSize / 2;

        return Math.abs(this.x - cx) < 1 && Math.abs(this.y - cy) < 1;
    }

    canMove(dir, maze) {
        if (dir.x === 0 && dir.y === 0) return false;

        const nextCol = this.col + dir.x;
        const nextRow = this.row + dir.y;

        return !maze.isWall(nextCol, nextRow);
    }

    render(ctx) {
        if (this.currentDir.x === 1) this.angle = 0;
        else if (this.currentDir.x === -1) this.angle = Math.PI;
        else if (this.currentDir.y === 1) this.angle = 0.5 * Math.PI;
        else if (this.currentDir.y === -1) this.angle = -0.5 * Math.PI;


        const mouthAngle = this.mouthOpen ? 0.25 * Math.PI : 0.05 * Math.PI;
        this.mouthAngle =

        ctx.fillStyle = "yellow";
        ctx.beginPath();
        ctx.arc(
            this.x,
            this.y,
            this.tileSize / 2 - 4,
            mouthAngle + this.angle,
            2 * Math.PI - mouthAngle + this.angle
        );
        ctx.lineTo(this.x, this.y);
        ctx.fill();
    }
}
