"use strict";

// custom modules
const apiConfig = require('../config/api.config');
const userApi = require('../api/user.api');
const playerApi = require('../api/player.api');
const AlbumsApi = require('../api/albumsReleases.api');
const artistApi = require('../api/artistsNewReleases.api');
const tracksApi = require('../api/track.api');
const categoriesApi = require('../api/categories.api');

const home = async (req, res) => {

  // current user profile
  const currentProfile = await userApi.getProfile(req);

  // new albums releases
  const albumsReleases = await AlbumsApi.getNewAlbumsReleases(req, apiConfig.LOW_LIMIT);

  // artists new albums
  const artistIdEntries = albumsReleases.items.map(item => item.artists.map(artist => artist.id));
  const uniqueArtistIds = [... new Set(artistIdEntries.flat(1))].join(',');
  const artistsNewReleases = await artistApi.getSeveralDetail(req, uniqueArtistIds);

  // recently played
  const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  const recentlyPlayedIds = recentlyPlayed.items.map(({ track }) => track.id);
  const uniqueTracksIds = [... new Set(recentlyPlayedIds)].join(',');
  const tracksPlayed = await tracksApi.getSeveralTracks(req, uniqueTracksIds);

  // categories 
  const categoriesData = await categoriesApi.getCategories(req, apiConfig.LOW_LIMIT);

  res.render('./pages/home', {
    currentProfile,
    albumsReleases,
    artistsNewReleases,
    tracksPlayed,
    categoriesData
  });
}

module.exports = { home }