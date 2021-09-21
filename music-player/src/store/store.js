import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchText: "",
    searchResult: [],
    artist: {},
    album: {},
    song: {},

// - Avslutade med att skapa den uppdaterade sång listan, kolla så att den körs igenom! -------------------------- 
    updatedSong: [],
    
    thumbNail: [],
    sharedSong: {},
    sharedSongResult: [],
    sharedArtist: {},
    sharedArtistResult: [],
  },

  mutations: {

  // ---- UPDATED VALUES --------------------------------
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
      console.log("SONG: ", this.state.song);
    },

    setUpdatedSong(state, payload) {
      state.updatedSong = payload;
    },

    updateArtist(state, payload) {
      state.artist = payload;
      console.log("ARTIST: ", this.state.artist);
    },

  // ---- Album not needed --------------

    updateAlbum(state, payload) {
      state.album = payload;
      console.log("ALBUM: ", payload);
    },
  
  //----- SHARED SONG & ARTIST ------------------------  

    setSharedSong(state, payload) {
      state.sharedSong = payload;
      console.log("SHARED SONG: ", payload);
    },

    setSharedSongResult(state, payload) {
      state.sharedSonResult = payload;
      console.log("Show Shared Song: ", payload)
    },

    setSharedArtist(state, payload) {
      state.sharedArtist = payload;
      console.log("Artist Name Is Set!", payload);
    },

    setSharedArtistResult(state, payload) {
      state.sharedArtistResult = payload
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
            this.state.searchText
        )
        .then((response) => {
          this.commit("updateSong", response.data);
          console.log("Hämtad artist: ", response.data);
        });
    },

    //==== Måste fullfölja fetchen med dispatch i Artist.vue ================

    async fetchArtist() {
      await axios
      .get("https://yt-music-api.herokuapp.com/api/yt/artists/" + this.state.searchText)
      .then((response) => {
        this.commit("updateArtist", response.data);
        console.log("Uppdaterar artist!")
      })
    },

    //--- MIGHT NOT NEED THIS -------------------

    // async fetchAlbum() {
    //   await axios
    //     .get(
    //       "https://yt-music-api.herokuapp.com/api/yt/search/" +
    //         this.state.searchText
    //     )
    //     .then((response) => {
    //       this.commit("updateAlbum", response.data);
    //       console.log("Hämtad Album: ");
    //     });
    // },

    //----- SHARED FETCHES ----------------------------------------

    async fetchSharedArtist() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/artists/" +
            this.state.searchText
        )
        .then((response) => {
          this.commit("setSharedArtistResult", response.data);
          console.log("Hämtad artist: ", response.data);
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
          console.log("Hämtad låt: ", response.data);
        });
    },
  },

  getters: {
    getSearchResult(state) {
      console.log("GETTER LOG", state.searchResult);
      return state.searchResult.content;
    },

    getArtist(state) {
      console.log("GET ARTISTNAME", state.sharedArtistResult);
      return state.sharedArtistResult;
    },

    getSong(state) {
      console.log("GET SONG: ", state.sharedSongResult)
      return state.sharedSongResult;
      
    },
  },
  modules: {},
});
