'use strict';

require('dotenv').config();
const {  server, start } = require('./src/server.js');
const { db } = require('./src/models/index.js');


const PORT = process.env.PORT || 3001;
// make sure our tables are created, start up the HTTP server.
db.sync()
  .then(() => {
    start(PORT);
  }).catch(e => {
    console.error('Could not start server', e.message);
  });