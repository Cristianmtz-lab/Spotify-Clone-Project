"use strict";

// custom modules
const { getData } = require('../config/axios.config');
const apiConfig = require('../config/api.config');

const getSeveralDetail = async (req, artistIds) => {
  const { data: trackArtists } = await getData(`/artists?ids=${artistIds}`, req.cookies.access_token);

  return trackArtists;
}

module.exports = {
  getSeveralDetail
}