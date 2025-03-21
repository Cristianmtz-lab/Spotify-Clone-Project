"use strict";

import { cookies, transferPlayback } from "./client_player.api.js";

const playerStateChange = (playerState) => {
  const { track_window } = playerState;
  console.log(playerState);
}

window.onSpotifyWebPlaybackSDKReady = () => {

  const volume = localStorage.getItem('Volume') ?? 100;

  // create spotify player instance
  const player = new Spotify.Player({
    name: 'cloneSpotify Web Player',
    getOAuthToken: (callback) => { callback(cookies.get('access_token')); },
    volume: volume / 100
  });

  //Player is ready
  player.addListener('ready', async ({ device_id }) => {

    //store device_id in localStorage
    localStorage.setItem('device_id', device_id);

    // transfer playback to current device
    await transferPlayback(device_id);

  });

  //call event when any changes occur in player
  player.addListener('player_state_changed', () => {

  });

  // connect Player
  player.connect();

}