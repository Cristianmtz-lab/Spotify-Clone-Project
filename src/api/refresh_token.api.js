"use strict";

//custom modules
const axiosConfig = require('../config/axios.config');

const getRefreshToken = async (refreshToken) => {
  try {
    const response = await axiosConfig.token.post('/token', {
      grant_type: 'refresh_token',
      refreshh_token: refreshToken
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}