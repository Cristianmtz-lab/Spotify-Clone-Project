"use strict";

// custom modules
const apiConfig = require('../config/api.config');
const userApi = require('../api/user.api');
const playerApi = require('../api/player.api');
const AlbumsApi = require('../api/albumsReleases.api');


const home = async (req, res) => {

  // current user profile
  const currentProfile = await userApi.getProfile(req);

  // recently played
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedTracks = recentlyPlayed.items.map(({ track }) => track)

  //new albums releases
  const albumsReleases = await AlbumsApi.getNewAlbumsReleases(req);

  res.render('./pages/home', {
    currentProfile,
    albumsReleases
  });
}

module.exports = { home }