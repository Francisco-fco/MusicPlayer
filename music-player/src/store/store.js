import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchText: "",
    searchResult: [],
    artist: {
      type: "",
      name: "",
    },
    album: {
      type: "",
      name: "",
      artist: "",
      year: ""
    },
    song: {},
    thumbNail: [
      {
        url: "",
      },
    ],
  },

  mutations: {
    setSearchResult(state, payload) {
      console.log("SETTER CONTEXT", payload);
      state.searchResult.content = payload;
      // someway PROXY starts to show up here
      // console.log("SETTER CONTEXT 2",state.searchResult)
    },
    updateSearchText(state, payload) {
      state.searchText = payload;
      console.log("searchText is:" + this.state.searchText);
    },

    updateSong(state, payload) {
      state.song = payload;
      console.log("SONG: ", payload);
    },

    updateArtist(state, payload) {
      state.artist = payload;
      console.log("ARTIST: " + payload)
    },

    updateAlbum(state, payload) {
      state.album = payload;
      console.log("ALBUM: ", payload)
    },

    setSharedSong(state, payload) {
      state.song = payload;
      console.log("SHARED SONG: " + payload)
    },

    setSharedArtist(state, payload) {
      state.artistName = payload;
      console.log("Artist Name Is Set!", payload);
    },
  },

  actions: {
    async fetchSearchedText() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/search/" +
            this.state.searchText
        )
        .then((response) => {
          console.log("FETCH-DATA: ", response.data.content);
          this.commit("setSearchResult", response.data.content);
          console.log("ALL INFO", response.data.content);
        });
    },

    async fetchSong() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.searchText)
        .then(response => {
          this.commit("updateSong", response.data)
          console.log("Hämtad artist: ", response.data)
        })
    },

    async fetchAlbum() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.searchText)
        .then(response => {
          this.commit('updateAlbum', response.data)
          console.log("Hämtad Album: ")
        })
    },
    
    async fetchArtist() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/artists/" + this.state.artist.name)
      .then(response => {
        this.commit("setSharedArtist", response.data)
        console.log("Hämtad artist: ", response.data)
      })
    },
  },

  getters: {
    getSearchResult(state) {
      console.log("GETTER LOG", state.searchResult);
      return state.searchResult.content;
    },

    getArtistName(state) {
      console.log("GET ARTISTNAME", state.artistName);
      return state.artistName;
    },
  },
  modules: {},
});
