import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchText: "",
    playingNow: "",
    searchResult: [],
    allSongs: [],
    allArtists: [],
    playList: [],
    index: 0,
    artist: "",
    updatedArtist: "",
    song: "",
    updatedSong: "",
    browseId: "",
    videoId: "",
  },

  mutations: {

    setSearchResult(state, payload) {
      state.searchResult.content = payload;
    },

    setPlayList(state,payload){
      state.playList.push(payload)
      console.log('inserted playList', state.playList)
    },

    updateSearchText(state, payload) {
      state.searchText = payload;
    },

    updateAllSongs(state, payload) {
      state.allSongs = payload;
    },

    updateAllArtists(state, payload) {
      state.allArtists = payload;
    },

    updateSong(state, payload) {
      state.song = payload;
    },

    setUpdatedSong(state, payload) {
      state.updatedSong = payload;
    },

    updateArtist(state, payload) {
      state.artist = payload;
    },

    setUpdatedArtist(state, payload) {
      state.updatedArtist = payload;
    },

    setBrowseId(state, payload) {
      state.browseId = payload;
    },

    setVideoId(state, payload) {
      state.videoId = payload;
    }, 

    setPlayingNow(state, payload) {
      state.playingNow = payload;
      console.log('SET playing now', payload)
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
    
    async fetchPlayList() {
      await axios 
      .get("https://yt-music-api.herokuapp.com/api/yt/songs/" + this.state.searchText)
      .then((response) => {
        this.commit("setPlayList", response.data.content);
      })
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

    getPlayList(state) {
      console.log( state.playList);
      return state.playList; 
    },

    getVideoId(state) {
      console.log('GET VIDEOID: ', state.videoId);
      return state.videoId;
    },

    getPlayingNow(state) {
      console.log("GET NOW PLAYING: ", state.playingNow);
      return state.playingNow;
    },

    //  getIndex() {
    //   return state.index;
    //  },
    
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
