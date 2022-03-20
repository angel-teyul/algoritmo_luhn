const express = require('express');
const app = express();
const { config } = require('./config/index');
const controllers = require('./routes/index.js');

controllers(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
