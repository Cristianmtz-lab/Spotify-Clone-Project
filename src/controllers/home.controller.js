"use strict";

// custom modules
const userApi = require('../api/user.api');


const home = async (req, res) => {

  // current user profile
  const currentProfile = await userApi.getProfile(req);

  res.render('./pages/home', { currentProfile });
}

module.exports = { home }