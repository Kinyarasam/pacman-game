#!/usr/bin/env node
const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

/**
 * Create a Rectangle and add it to the game canvaas.
 *
 * @param {number} x - start position on the x axis.
 * @param {number} y - start position on the y axis.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @param {string} color - The color of the rectangle.
 * @returns {void}
 */
const createRect = (x, y, width, height, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
};

const fps = 30;
const wallColor = '#342DCA';

// Define the size of each cell in the map (in pixels)
const cellSize = 32;
const wallInnerColor = '#000';
const wallSpaceWidth = cellSize / 1.5;
const wallOffset = (cellSize - wallSpaceWidth) / 2;

// Set the background color of the canvas to black
const drawScreen = () => {
  createRect(0, 0, canvas.clientWidth, canvas.height, '#000');
};

/*
 * Two-dimensional array representing the map for the Pacman game.
 *
 * @typedef {number[][]} Map
 *
 * @property {number} 1 - Indicates a wall on the map.
 * @property {number} 0 - Indicates a path on the map.
 */
const map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

/**
 * Draw the walls and the path.
 *
 * @function
 * @returns {void}
 */
const drawWalls = () => {
  // Loop through the map array and draw the rectangles
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) { // Current cell is a Wall
        createRect(
          j * cellSize,
          i * cellSize,
          cellSize,
          cellSize,
          wallColor
        );
      }
      if (j > 0 && map[i][j - 1] === 1) {
        // Draw inner wall on the left side of the current cell
        createRect(
          j * cellSize,
          i * cellSize + wallOffset,
          wallSpaceWidth + wallOffset,
          wallSpaceWidth,
          wallInnerColor
        );
      }
      if (j < map[i].length - 1 && map[i][j + 1] === 1) {
        // Draw inner wall on the right side of the current cell
        createRect(
          j * cellSize + wallOffset,
          i * cellSize + wallOffset,
          wallSpaceWidth + wallOffset,
          wallSpaceWidth,
          wallInnerColor
        );
      }
      if (i > 0 && map[i - 1][j] === 1) {
        // Draw inner wall on the top side of the current cell.
        createRect(
          j * cellSize + wallOffset,
          i * cellSize,
          wallSpaceWidth,
          wallSpaceWidth + wallOffset,
          wallInnerColor
        );
      }
      if (i < map.length - 1 && map[i + 1][j] === 1) {
        // Draw inner wall on the bottom side of the current cell.
        createRect(
          j * cellSize + wallOffset,
          i * cellSize + wallOffset,
          wallSpaceWidth,
          wallSpaceWidth + wallOffset,
          wallInnerColor
        );
      }
    }
  }
};

const pacman = new Pacman(
  cellSize + (cellSize / 2),
  cellSize + (cellSize / 2),
  cellSize / 2,
  'down',
  4
);

/**
 * Main game loop, responsible for updating the game state and drawing the game.
 *
 * @function
 * @returns {void}
 */
const gameLoop = () => {
  update();
  draw();
};

/**
 * Update the game state
 *
 * @function
 * @returns {void}
 */
const update = () => {
  /**
   * TODO: Update the game state.
   */
  pacman.move(pacman.updateDirection());
};

// console.log(pacman);

// pacman.draw(context);

/**
 * Draw the game.
 *
 * @function
 * @returns {void}
 */
const draw = () => {
  drawScreen();
  drawWalls();
  pacman.draw(context);
  // pacman.draw();
};

// start the game loop.
// const gameInterval = setInterval(gameLoop, 1000 / fps);
setInterval(gameLoop, 1000 / fps);
