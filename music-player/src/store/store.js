import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchText: "",
    searchResult: [],
    artistName: "",
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

    setSharedArtist(state, payload) {
      state.artistName = payload;
      console.log("Artist Name Is Set!")
    }
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

    async fetchArtist() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/artist" + this.state.artistName)
        .then(response => {
          this.commit("setArtistName", response.data)
          console.log("Artist NAME: ", response.data)
        })
    }
  },

  getters: {
    getSearchResult(state) {
      console.log("GETTER LOG", state.searchResult)
      return state.searchResult.content;
    },

    getArtistName(state) {
      console.log("GET ARTISTNAME", state.artistName)
      return state.artistName;
    },
  },
  modules: {},
});
