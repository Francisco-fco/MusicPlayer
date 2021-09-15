import { createStore } from "vuex";

export default createStore({
  state: {
    content: [
      {
        type: String,
        videoId: String,
        playlistId: String,
        name: String,
      }
    ],
    videoId: String,
    playlistId: String,
    artist: {},
    album: {},
    thumbnails: [],
    songs: [],
  },
  mutations: {
    setSong(state, payload) {
      state.songs = payload;
    },
  },
  getters: {
    getSong(state) {
      return state.songs;
    },
  },
  actions: {},
  modules: {},
});
