#!/usr/bin/env node

/**
 * Express server for serving static HTML files.
 *
 * @module server
 */
const express = require('express');
const app = express();
const path = require('path');

/**
 * Middleware for serving static files.
 *
 * @param {string} root - The root directory from which to serve static assets
 * @param {Object} options - Options for the middleware.
 * @returns {function} The middleware function.
 */
app.use(express.static('.', { index: 'index.html' }));

/**
 * Port number for the server.
 *
 * @constant
 * @type {number}
 * @default
 */
const PORT = process.env.PORT || 3000;

/**
 * GET request handler for the root route.
 *
 * @param {Object} req - The request object
 * @param {Object} res - The response object.
 * @returns {void}
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/**
 * Start the server.
 *
 * @function
 * @returns {void}
 */
const start = () => {
  app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
  });
};

start();
