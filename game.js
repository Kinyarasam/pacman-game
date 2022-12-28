#!/usr/bin/env node
/**
 * Game Logic.
 */
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
let createRect = (x, y, width, height, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
};

const wallColor = "#000";
const pathColor = "#fff";

// Set the background color of the canvas to black
// createRect(10, 10, canvas.clientWidth, canvas.height, "#000");

// Define the map as a two-dimensional array of integers.
const map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// Define the size of each cell in the map (in pixels)
const cellSize = 32;

let drawWalls = () => {
  // Loop through the map array and draw the rectangles
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] == 1) { // Current cell is a Wall
        createRect(
          j * cellSize,
          i * cellSize,
          cellSize,
          cellSize,
          wallColor
        );
      }
      else if (map[i][j] == 0) { // current cell is a path.
        createRect(
          j * cellSize,
          i * cellSize,
          cellSize,
          cellSize,
          pathColor
        );
      }
    }
  }
}

drawWalls();
