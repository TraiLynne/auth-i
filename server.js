const express = require('express');

const server = express();
const port = 4000;
const mainRouter = require('./routers');

server.use('/api', mainRouter)

server.use('/', (req, res) => res.send('It\'s working!!\nIt\'s working!!'));

server.listen(port, () => console.log(`Server listening on port ${port}`));