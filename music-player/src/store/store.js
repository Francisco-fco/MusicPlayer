import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchText: "",
    searchResult: [],
    artist: {},
    album: {},
    song: {},
    updatedSong: {},
    updatedArtist: {},
    thumbNails: [],
    sharedSong: {},
    sharedSongResult: [],
    sharedArtist: {},
    sharedArtistResult: [],
    browseId: {},
  },

  mutations: {

    setSearchResult(state, payload) {
      console.log("SETTER CONTEXT", payload);
      state.searchResult.content = payload;
    },

    updateSearchText(state, payload) {
      state.searchText = payload;
      console.log("searchText is:" + this.state.searchText);
    },

    updateSong(state, payload) {
      state.song = payload;
      console.log("SONG: ", this.state.song);
    },

    setUpdatedSong(state, payload) {
      state.updatedSong = payload;
    },

    updateArtist(state, payload) {
      state.artist = payload;
      console.log("ARTIST: ", this.state.artist);
    },

    updateAlbum(state, payload) {
      state.album = payload;
      console.log("ALBUM: ", payload);
    },

    setBrowseId(state, payload) {
      state.browseId = payload;
    },

    //----- SHARED SONG & ARTIST ------------------------

    setSharedSong(state, payload) {
      state.sharedSong = payload;
      console.log("SHARED SONG: ", payload);
    },

    setSharedSongResult(state, payload) {
      state.sharedSonResult = payload;
    },

    setSharedArtist(state, payload) {
      state.sharedArtist = payload;
      console.log("Artist Name Is Set!", payload);
    },

    setSharedArtistResult(state, payload) {
      state.sharedArtistResult = payload;
    },

    setThumbnails(state, payload) {
      state.thumbNails = payload;
    }
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
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/songs/" +
            this.state.updatedSong
        )
        .then((response) => {
          this.commit("updateSong", response.data);
          console.log("Hämtad låt: ", response.data);
        });
    },

    async fetchArtist() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/artists/" +
            this.state.searchText
        )
        .then((response) => {
          this.commit("updateArtist", response.data);
          console.log("Uppdaterar artist!");
        });
    },

    async fetchBrowseId() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/artists/" + this.state.browseId)
        .then((response) => {
          this.commit("setBrowseId", response.data)
          console.log("BROWSEID: ", response.data)
        })
    
    },


    //--- MIGHT NOT NEED THIS -------------------

    async fetchAlbum() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/search/" +
            this.state.searchText
        )
        .then((response) => {
          this.commit("updateAlbum", response.data);
          console.log("Hämtad Album: ", response.data);
        });
    },

    async fetchThumbnails() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/artists/" + this.state.searchText)
      .then((response) => {
        this.commit("setThumbnails", response.data.content.thumbnails)
      })
    },

    //----- SHARED FETCHES ----------------------------------------

    async fetchSharedArtist() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/artists/" +
            this.state.searchText
        )
        .then((response) => {
          this.commit("setSharedArtistResult", response.data);
          console.log("Hämtad artist: ", response.data.content[0]);
        });
    },

    async fetchSharedSong() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/songs/" +
            this.state.searchText
        )
        .then((response) => {
          this.commit("setSharedSongResult", response.data);
          console.log("Hämtad låt: ", response.data.content[0]);
        });
    },
  },

  getters: {
    getSearchResult(state) {
      return state.searchResult.content;
    },

    getArtist(state) {
      console.log("GET ARTISTNAME", state.sharedArtist);
      return state.sharedArtist;
    },

    getSong(state) {
      console.log("GET SONG: ", state.sharedSong);
      return state.sharedSong;
    },

    getThumbnails(state) {
      console.log("GET IMAGES: ", state.thumbNails);
      return state.thumbNails;
    },

    getBrowseId(state) {
      console.log("GET BROWSEID ", state.browseId);
      return state.browseId
    },
  },
  modules: {},
});
