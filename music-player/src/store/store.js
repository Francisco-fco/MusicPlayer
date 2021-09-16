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
    },
  },

  getters: {},

  actions: {
    async fetchSearchedText() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/search/" +
            this.state.searchText)
        .then((response) => {
          this.commit("setSearchResult", response.data);
          console.log("action response data:" + response.data);
          console.log(this.state.searchResult);
        });
    },
  },
  modules: {},
});
