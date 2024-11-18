const express = require('express');
const jsonServer = require('json-server');
const path = require('path');
const server = express();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(express.json());
server.use(middlewares);
server.use('/api', router);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
