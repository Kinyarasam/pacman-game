export class Maze {
    constructor(tileSize) {
        this.tileSize = tileSize;

        this.layout = [
            "111111111111111111111",
            "100000000010000000001",
            "101110111010111011101",
            "101110111010111011101",
            "100000000000000000001",
            "101110101111101011101",
            "100000100010001000001",
            "111110111010111011111",
            "000010100000001010000",
            "111110101101101011111",
            "000000001000100000000",
            "111110101000101011111",
            "000010101111101010000",
            "000010100000001010000",
            "111110001111100011111",
            "100000000010000000001",
            "101110111010111011101",
            "100010000000000010001",
            "110010101111101010011",
            "100000100010001000001",
            "101111111010111111101",
            "100000000000000000001",
            "111111111111111111111",
        ];
    }

    render(ctx) {
        for (let row = 0; row < this.layout.length; row++) {
            for (let col = 0; col < this.layout[row].length; col++) {
                if (this.layout[row][col] == "1") {
                    ctx.fillStyle = "blue";
                    ctx.fillRect(
                        col * this.tileSize,
                        row * this.tileSize,
                        this.tileSize,
                        this.tileSize
                    );
                }
            }
        }
    }

    isWall(x, y) {
        const col = Math.floor(x / this.tileSize);
        const row = Math.floor(y / this.tileSize);

        if (row < 0 || row >= this.layout.length) return true;
        if (col < 0 || col >= this.layout[0].length) return true;

        return this.layout[row][col] === "1";
    }
}


