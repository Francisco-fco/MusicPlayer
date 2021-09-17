import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchText: "",
    searchResult: [],
    videoId: "",
    ids: [],
  },

  mutations: {
    setSearchResult(state, payload) {
      state.searchResult = payload;
    },
    updateSearchText(state, payload) {
      state.searchText = payload;
      console.log("searchText is:" + this.state.searchText);
    },
    updateVideoId(state, payload) {
      state.videoId = payload;
      console.log("videoId is:" + this.state.videoId);
    },
    allIds(state, payload) {
      state.ids = payload;
    },
  },

  actions: {
    async fetchSearchedText() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/songs/" +
            this.state.searchText
        )
        .then((response) => {
          this.commit("setSearchResult", response.data);
          console.log("RESPONSE DATA: " + response.data);
          console.log(this.state.searchResult);
        });
    },

    // Få tag på videoId för att fullfölja fetchen

    async fetchVideoId() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/songs/" +
            this.state.videoId
        )
        .then((response) => {
          console.log( "Put id's in array!", response)
          this.commit("allIds", response.data)
        });
    },
  },

  getters: {
    getSearchResult(state) {
      return state.searchResult
    },

    getVideoId(state) {
      return state.videoId
    }
  },

  modules: {},
});
