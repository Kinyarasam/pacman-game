#!/usr/bin/env node


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
