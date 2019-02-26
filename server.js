require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const port = process.env.port;

// Middleware
server.use(cors());
server.use(helmet());

server.use('/', (req, res) => res.send('It\'s Working !!\nIt\'s Working !!'));

server.listen(port, () => console.log(`Server listening on port ${port}`));