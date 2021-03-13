const cors = require('cors'); 
const express = require('express');
const app = express();
const port = 3000;
const router = require('./src/Routes/router');

app.use(cors());

app.use('/', router);

app.listen(port);