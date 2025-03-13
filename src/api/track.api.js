"use strict";

const { getData } = require('../config/axios.config');

const getSeveralTracks = async (req, ids) => {
  const { data: { tracks: uniqueTracks } } = await getData(`/tracks?ids=${ids}`, req.cookies.access_token);

  return uniqueTracks;
}

module.exports = {
  getSeveralTracks
}