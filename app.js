"use strict";

// node module
const cors = require('cors');
const cookieParser = require('cookie-parser');

// custom modules
const login = require('./src/routes/login.route');
const auth = require('./src/routes/auth.route');

// initial express app 
const express = require('express');
const app = express();

// enable cors & cookie parser
app.disable('x-powered-by');
app.use(cors()).use(cookieParser());
app.use(express.json());

// ejs
app.set('view engine', 'ejs');

// setting static directory
app.use(express.static(`${__dirname}/public`));

// login page 
app.use('/login', login);

// auth page
app.use('/auth', auth);

app.listen(5000, () => {
  console.log(`Server listening att http://localhost:5000`);
});