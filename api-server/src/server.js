'use strict';

//
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/routes.js');
const logger = require('./middleware/logger.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(logger);
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);
////
const v1Routes = require('./routes/v1.js');
app.use('/api/v1', v1Routes);


// Catchalls
app.use('*',notFound);
app.use(errorHandler);
/////////






module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
