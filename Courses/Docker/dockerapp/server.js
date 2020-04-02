'use strict'
const express = require('express')

//Constants
const port = 6050;
const host = '0.0.0.0';

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello world from Kubernetes and Docker');
});

app.listen(port, host);

console.log(`Server running container port ${port}`);