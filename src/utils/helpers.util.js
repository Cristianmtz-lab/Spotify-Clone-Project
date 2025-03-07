"use strict";

// custom modules
const apiConfig = require('../config/api.config');

const generateRandomString = function (length) {
  let randomString = '';
  const possibleLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  for (let i = 0; i < length - 1; i++) {
    const randomIndex = Math.floor(Math.random() * possibleLetters.length);
    randomString += possibleLetters[randomIndex];
  }

  return randomString;
}

module.exports = {
  generateRandomString
}