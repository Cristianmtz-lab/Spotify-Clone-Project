"use strict";

// node module

const cors = require('cors');
const cookieParser = require('cookie-parser');

// initial express app 

const express = require('express');
const app = express();

// ejs
app.set('view engine', 'ejs');

// setting static directory
app.use(express.static(`${__dirname}/public`));

// enable cors & cookie parser
app.use(cors()).use(cookieParser());

// login page 
app.get('/login', (req, res) => {
  res.send('login');
});

app.listen(5000, () => {
  console.log(`Server listening att http://localhost:5000`);
});