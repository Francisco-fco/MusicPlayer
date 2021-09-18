import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchText: "",
    searchResult: [],
  },

  mutations: {
    setSearchResult(state, payload) {
      state.searchResult = payload;
    },
    updateSearchText(state, payload) {
      state.searchText = payload;
      console.log("searchText is:" + this.state.searchText);
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
  },

  getters: {
    getSearchResult(state) {
      return state.searchResult;
    },
  },

  modules: {},
});
