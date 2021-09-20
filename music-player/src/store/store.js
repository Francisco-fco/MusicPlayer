import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchText: "",
    searchResult: [],
  },

  mutations: {
    setSearchResult(state, payload) {
      console.log("SETTER CONTEXT", payload)
      state.searchResult.content = payload;
      // someway PROXY starts to show up here
      // console.log("SETTER CONTEXT 2",state.searchResult) 

    },
    updateSearchText(state, payload) {
      state.searchText = payload;
      console.log("searchText is:" + this.state.searchText);
    },
  },

  actions: {
    async fetchSearchedText() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.searchText)
        .then(response => {
          console.log("FETCH-DATA: " , response.data.content);
          this.commit("setSearchResult", response.data.content);
          console.log("ALL INFO", response.data.content);
        });
    },
  },

  getters: {
    getSearchResult(state) {
      console.log("GETTER LOG", state.searchResult)
      return state.searchResult.content;
    },
  },
  modules: {},
});
