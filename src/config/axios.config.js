"use strict";

// node modules
const axios = require('axios').default;
const querystring = require('querystring');

//custom modules 
const apiConfig = require('./api.config');

// axios instance for access token and refresh token request
const token = axios.create({
  baseURL: apiConfig.TOKEN_BASE_URL,
  headers: {
    'Authorization': `Basic ${(Buffer.from(apiConfig.CLIENT_ID + ':' + apiConfig.CLIENT_SECRET).toString('base64'))}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

//axios instance for all api request
const api = axios.create({ baseURL: apiConfig.BASE_URL });

const getData = async (apiUrl, access_token) => {
  try {
    const response = await api.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${access_token}`
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  token,
  getData
}