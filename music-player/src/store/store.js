import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchText: "",
    searchResult: [],
    videoId:"",
  },

  mutations: {
    setSearchResult(state, payload) {
      state.searchResult = payload;
    },
    updateSearchText(state, payload) {
      state.searchText = payload;
      console.log("searchText is:" + this.state.searchText);
    },

    setVideoId(state, payload) {
      state.videoId = payload;
    },
  },

  actions: {
    async fetchSearchedText() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/search/" +
            this.state.searchText
        )
        .then(response => {
          console.log("FETCH-DATA: " + response.data);
          this.commit("setSearchResult", response.data);
          console.log(this.state.searchResult);
        });
    },
    
    async fetchVideoId() {
      await axios .get("https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.searchText)
      .then(response => {
        console.log("Fetch-ID: " + response.data)
        this.commit("setVideoId", response.data)

      })
    }
  },

  getters: {
    getSearchResult(state) {
      return state.searchResult;
    },

    getVideoId(state) {
      return state.videoId;
    }
  },

  modules: {},
});
