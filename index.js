const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello World War 3');
  })
  
  app.listen(3000)