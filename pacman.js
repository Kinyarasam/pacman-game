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
   * Capture the keypress.
   * 
   * @function.
   * @returns {void}
   */
  updateDirection() {
    document.addEventListener('keydown', (event) => {
      console.log(event.key)
      // Check if the arrow keys were pressed
      if (event.key === 'ArrowLeft') {
        this.direction = 'left';
        // console.log(pacman.direction);
      } else if (event.key === 'ArrowRight') {
        this.direction = 'right';
      } else if (event.key === 'ArrowUp') {
        this.direction = 'up';
      } else if (event.key === 'ArrowDown') {
        this.direction = 'down';
      }
    });
  } 

  // /**
  //  * --------
  //  *
  //  * @function
  //  * @returns {number} The x-coordinate
  //  */
  // get_map_x() {
  //   return (parseInt(this.x / cellSize));
  // }

  // /**
  //  * --------
  //  *
  //  *  @function
  //  *  @returns {number} The y-coordinate
  //  */
  // get_map_y() {
  //   return (parseInt(this.y / cellSize));
  // }

  // /**
  //  * -----
  //  *
  //  *  @function
  //  *  @returns {number} Right wall x-coordinate.
  //  */
  // get_map_x_RS() {
  //   return (parseInt(this.x * 0.99 + cellSize) / cellSize);
  // }

  // /**
  //  * -----
  //  *
  //  *  @function
  //  *  @returns {number} Right wall y-coordinate.
  //  */
  // get_map_y_RS() {
  //   return (parseInt(this.y * 0.99 + cellSize) / cellSize);
  // }
  // checkWallCollision() {
    // let isCollision = false;

    // if (
    //   map[parseInt(this.y / cellSize)][
    //     parseInt(this.x / cellSize)
    //   ] == 1 ||
    //   map[parseInt(this.y / cellSize + 0.9999)][
    //     parseInt(this.x / cellSize)
    //   ] == 1 ||
    //   map[parseInt(this.y / cellSize)][
    //     parseInt(this.x / cellSize + 0.9999)
    //   ] == 1 ||
    //   map[parseInt(this.y / cellSize + 0.9999)][
    //     parseInt(this.x / cellSize + 0.9999)
    //   ] == 1
    // ) {
    //     isCollision = true;
    // }
    // return (isCollision);
  // }

  /**
   * Check for collision between a Pacman character and a map.
   *
   * @param {Pacman} pacman - The Pacman character.
   * @param {Map} map - The map data.
   * @returns {boolean} True if there is a collision, false otherwise.
   */
  checkCollision () {
    // Get the Pacman's current position
    // const { x, y } = pacman;

    // Convert the position to map cell coordinates
    const cellX = Math.floor(this.x / cellSize);
    const cellY = Math.floor(this.y / cellSize);
    console.log(map[cellY][cellX])

    // Check if the cell at the Pacman's position is a wall
    if (map[cellY][cellX] === '#') {
      this.x = 28;
    }
    return map[cellY][cellX] === 1;
  };

  forwardMove() {
    if (this.direction === 'right') { 
      this.x += this.speed;
    } else if (this.direction === 'left') {
      this.x -= this.speed;
    } else if (this.direction === 'up') {
      this.y -= this.speed;
    } else if (this.direction === 'down') {
      this.y += this.speed;
    }
  }

  backwardMove() {
    console.log('backmove')
    if (this.direction === 'right') { 
      this.x -= this.speed;
    } else if (this.direction === 'left') {
      this.x += this.speed;
    } else if (this.direction === 'up') {
      this.y += this.speed;
    } else if (this.direction === 'down') {
      this.y -= this.speed;
    }
  }

  /**
   * Move the pacman in a given direction.
   *
   * @param {string} direction - The direction in which to move the Pacman.
   * @returns {void}
   */
  move() {
    // if (map[cellX][cellY] !== '.') {
      if (this.x < 0) {
        this.x = 736;
      } else if (this.x > 732) {
        this.x = 0;
      }
      this.updateDirection();
      this.forwardMove();
      
      console.log(this.checkCollision());
      console.log(this.direction)
      console.log(`x: ${this.x} y: ${this.y}`)
      if (this.checkCollision()) {
        this.backwardMove();
        return;
      }
    // }
  }

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


