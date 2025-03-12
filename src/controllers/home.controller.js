"use strict";

// custom modules
const apiConfig = require('../config/api.config');
const userApi = require('../api/user.api');
const playerApi = require('../api/player.api');
const AlbumsApi = require('../api/albumsReleases.api');
const artistApi = require('../api/artistsNewReleases.api');


const home = async (req, res) => {

  // current user profile
  const currentProfile = await userApi.getProfile(req);

  // recently played
  // const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
  // const recentlyPlayedTracks = recentlyPlayed.items.map(({ track }) => track)

  // new albums releases
  const albumsReleases = await AlbumsApi.getNewAlbumsReleases(req);

  // artists new albums
  const artistIdEntries = albumsReleases.items.map(item => item.artists.map(artist => artist.id));
  const uniqueArtistIds = [... new Set(artistIdEntries.flat(1))].join(',');
  const artistsNewReleases = await artistApi.getSeveralDetail(req, uniqueArtistIds);

  console.log(artistsNewReleases)

  res.render('./pages/home', {
    currentProfile,
    albumsReleases,
    artistsNewReleases
  });
}

module.exports = { home }