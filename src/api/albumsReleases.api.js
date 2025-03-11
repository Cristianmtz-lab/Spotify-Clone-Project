"use strict";

// custom modules
const { getData } = require('../config/axios.config');

const getNewAlbumsReleases = async (req) => {
  const { data: { albums: newAlbumsReleases } } = await getData(`/browse/new-releases`, req.cookies.access_token);

  return newAlbumsReleases;
}

module.exports = {
  getNewAlbumsReleases
}