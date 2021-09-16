import { createStore } from "vuex";

export default createStore({
  state: {
    searchText: "",
    content: [
      {
        type: String,
        videoId: String,
        playlistId: String,
        name: String,
        artist: {
          name: String,
          browseId: String
        }
      }
    ],
    videoId: String,
    playlistId: String,
   // artist: {},
    album: {
      name: String,
      browseId: String
    },
    thumbnails: [],
    songs: [],
  },
  mutations: {
    setSong(state, payload) {
      state.songs = payload;
    },
    updateSearchText(state, searchText) {
      state.searchText = searchText;
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
