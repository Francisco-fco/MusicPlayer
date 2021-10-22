import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchText: "",
    searchResult: [],
    allSongs: [],
    allArtists: [],
    



    artist: "",
    updatedArtist: "",
    song: "",
    updatedSong: "",
    thumbNails: [],
    thumbNailsResult: [],
    browseId: "",
    videoId: "",
  },

  mutations: {

    setSearchResult(state, payload) {
      state.searchResult.content = payload;
    },

    updateSearchText(state, payload) {
      state.searchText = payload;
    },

    updateAllSongs(state, payload) {
      state.allSongs = payload;
      console.log("UPPDATERA alla låtar: ", payload);
    },

    updateAllArtists(state, payload) {
      state.allArtists = payload;
      console.log("UPPDATERA alla artister: ", payload);
    },




    updateSong(state, payload) {
      state.song = payload;
    },

    setUpdatedSong(state, payload) {
      state.updatedSong = payload;
    },

    updateArtist(state, payload) {
      state.artist = payload;
      console.log("update artiiiiiist: ", payload);
    },

    setUpdatedArtist(state, payload) {
      state.updatedArtist = payload;
      console.log("UPDATED ARTIST", payload);
    },

    updateAlbum(state, payload) {
      state.album = payload;
    },

    setBrowseId(state, payload) {
      state.browseId = payload;
    },

    setThumbnails(state, payload) {
      state.thumbNails = payload;
    },

    setThumbnailsResult(state, payload) {
      state.thumbNailsResult = payload;
    },

    setVideoId(state, payload) {
      state.videoId = payload;
    }
  },

  actions: {
    async fetchSearchedText() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/search/" + this.state.searchText
        )
        .then((response) => {
          console.log("FETCH-DATA: ", response.data.content);
          this.commit("setSearchResult", response.data.content);
          console.log("ALL INFO", response.data.content);
        });
    },

    async fetchAllSongs() {
      await axios
      .get("https://yt-music-api.herokuapp.com/api/yt/songs/" + this.state.searchText)
      .then((response) => {
        console.log("ALL SONGS!!! ", response.data.content);
      this.commit("updateAllSongs", response.data.content);

      });
    },

    async fetchAllArtists() {
      await axios
      .get("https://yt-music-api.herokuapp.com/api/yt/artists/" + this.state.searchText)
      .then((response) => {
        console.log("ALL ARTISTS!!! ", response.data.content);
      this.commit("updateAllArtists", response.data.content);

      });
    },    

     async fetchSong() {
       await axios
         .get("https://yt-music-api.herokuapp.com/api/yt/songs/" + this.state.song)
         .then((response) => {
           this.commit("setUpdatedSong", response.data.content[0]);

      });
    },

        async fetchArtist() {
          await axios
          .get("https://yt-music-api.herokuapp.com/api/yt/artists/" + this.state.artist)
          .then((response) => {
            console.log("Uppdaterar artist!", response.data.content[0]);
            this.commit("setUpdatedArtist", response.data.content[0]);
          });
        },

    async fetchBrowseId() {
      await axios.get("https://yt-music-api.herokuapp.com/api/yt/artists/" + this.state.browseId)
        .then((response) => {
          this.commit("setBrowseId", response.data)
          console.log("BROWSEID: ", response.data)
        })
    
    },
  },

  getters: {
    getSearchResult(state) {
      console.log("got searchResult: ", state.searchResult.content);
      return state.searchResult.content;
    },

    getAllSongs(state) {
      console.log("GOT ALL SONGS: ", state.allSongs);
      return state.allSongs;
    },

    getAllArtists(state) {
      console.log("GOT ALL ARTISTS: ", state.allArtists);
      return state.allArtists;
    },






    getSong(state) {
      console.log("GET UPDATED-SONG: ", state.updatedSong);
      return state.updatedSong;
    },

    // Does not work
    getArtist(state) {
      console.log("GET ARTISTNAME", state.updatedArtist);
      return state.updatedArtist;
    },

    getBrowseId(state) {
      console.log("GET Browse ID ", state.browseId);
      return state.browseId
    },
  },
  modules: {},
});
