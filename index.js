'use strict';
require('dotenv').config();

// Start up DB Server
const { db } = require('./src/auth/models/index');
// const { start } = require('./src/server.js')
// const PORT=process.env.PORT;
db.sync()
  .then(() => {
    // Start the web server
    // start(PORT);
    require('./src/server.js').start(process.env.PORT);
  }).catch(err => console.log(err));

