"use strict";

// custom modules
const { getData } = require('../config/axios.config');
const { getUrlQuery } = require('../utils/helpers.util');

const getNewAlbumsReleases = async (req, itemLimit) => {
  const { limit, offset, page } = getUrlQuery(req.params, itemLimit);
  const { data: { albums: newAlbumsReleases } } = await getData(`/browse/new-releases?limit=${limit}&offset=${offset}`, req.cookies.access_token);

  return { baseUrl: req.baseUrl, page, ...newAlbumsReleases };
}

module.exports = {
  getNewAlbumsReleases
}