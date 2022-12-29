#!/usr/bin/env node

/**
 * A Class representing a Pacman character in a game.
 *
 * @class.
 */
class Pacman {
  /**
   * Create a Pacman.
   *
   * @param {number} x - x-coordinate position of the Pacman.
   * @param {number} y - y-coordinate position of the Pacman.
   * @param {string} direction - The direction the Pacman is facing.
   * @param {number} speed - The Speed at which the Pacman moves.
   */
  constructor(x, y, radius, direction, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.direction = direction;
    this.speed = speed;
  }

  /**
   * Get the radius of the pacman.
   * 
   * @returns {number} The radius of the pacman.
   */
  get radius() {
    return this._radius;
  }

  /**
   * Set the radius of the pacman.
   * 
   * @param {number} radius - The readius of the circle.
   * @throws {TypeError} If radius is not a number
   */
  set radius(radius) {
    if (typeof radius !== 'number') {
      throw new TypeError('radius must be a number.') 
    }
    this._radius = radius;
  }

  /**
   * Get the x position.
   *
   * @returns {number} The x position.
   */
  get x() {
    return this._x;
  }

  /**
   * Set the x position.
   *
   * @param {number} x - The x coordinate.
   * @throws {TypeError} If x is not an integer.
   */
  set x(x) {
    if (typeof x !== 'number') {
      throw new TypeError('x must be a number');
    }
    this._x = x;
  }

  /**
   * Get y-coordinates of the Pacman.
   *
   * @returns {number} The y-cordinate.
   */
  get y() {
    return this._y;
  }

  /**
   * Set the y-cordinates.
   *
   * @param {number} y - The y coordinate.
   * @throws {TypeError} If y is not a number.
   */
  set y(y) {
    if (typeof y !== 'number') {
      throw new TypeError('y must be a number');
    }
    this._y = y;
  }

  /**
   * Get the direction
   * 
   * @returns {string} The direction of Pacman.
   */
  get direction() {
    return this._direction;
  }

  /**
   * Set the direction.
   * 
   * @param {string} direction - The direction of the Pacman.
   * @throws {TypeError} If direction is not a string.
   */
  set direction(direction) {
    if (typeof direction !== 'string') {
      throw new TypeError('direction must be a string');
    }
    this._direction = direction;
  }

  /**
   * Move the pacman in a given direction.
   *
   * @param {string} direction - The direction in which to move the Pacman.
   * @returns {void}
   */
  move(direction) {


    if (this.direction === 'right') {
      this.x += this.speed;
    } else if (this.direction === 'left') {
      this.x -= this.speed;
    } else if (this.direction === 'up') {
      this.y -= this.speed;
    } else if (this.direction === 'down') {
      this.y += this.speed;
    }



    this.direction = direction;
    console.log(this.direction);
  }

  checkWallCollision() {}

  /**
   * Draw the Pacman on the canvas.
   *
   * @param {CanvasRenderingContext} canvas - The canvas context.
   * @returns {void}
   */
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'yellow';
    context.fill();
  }
}


//const pacman = new Pacman(50, 50, 'right', 50);

//pacman.move('left');
//console.log(context);

//pacman.draw(context);



/**
 *
const pacman = {
  x: 50, // The x-coordinate of the pacman's position on the map
  y: 50, // The y-coordinate of the pacman's position on the map
  direction: 'right', // The direction that the pacman is facing.
  speed: 5,
  radius: 10,
  color: 'yellow',
  
  updatePosition: () => {
    if (this.direction === 'up') {
      this.y -= this.speed;
    } else if (this.direction === 'down') {
      this.y += this.speed;
    } else if (this.direction === 'left') {
      this.x -= this.speed;
    } else if (this.direction === 'right') {
      this.x += this.speed;
    }
  },

  // Method to draw the Pacman on the canvas
  draw: function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
  }
};
// module.exports = pacman;
 *
 */
