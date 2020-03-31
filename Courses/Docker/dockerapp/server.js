'use strict'
const express = require('express')

//Constants
const port = 8080;
const host = '0.0.0.0';

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello Docker World');
});

app.listen(port, host);

console.log(`Server running container port ${port}`);