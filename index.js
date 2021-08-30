require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const http = require('http');
const cors = require('cors');

const PORT = 8080;

const app = express();

app.use(cors());
app.use(bodyParser.json());

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`api heros on port ${PORT}!`);
});
