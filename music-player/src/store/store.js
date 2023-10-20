import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    searchText: "",
    searchResults: [],
    playingVideoId: null,
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
      console.log("in mutation: ", payload);
      state.searchResult = payload;
    },

    setPlayingVideo(state, videoId) {
      state.playingVideoId = videoId;
    },

    setPlayList(state, payload) {
      state.playList.push(payload);
      console.log("inserted playList", state.playList);
    },

    updateSearchText(state, payload) {
      state.searchText = payload;
    },

    updateAllSongs(state, payload) {
      state.allSongs = payload;
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
      console.log("SET playing now", payload);
    },
  },

  actions: {
    async fetchSearchedText({ commit }, searchText) {
      console.log("fetchSearchedText in store: ", searchText);
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              q: searchText,
              part: "snippet",
              type: "video",
              maxResults: 10,
              key: "AIzaSyBPrj12o41wT2pqmLBcdrpLVcsUmaRya9A",
            },
          }
        );
        const searchResult = response.data.items;
        console.log("SearchResult IN STORE: ", searchResult);
        commit("setSearchResult", searchResult);
        return Promise.resolve(searchResult);
      } catch (error) {
        console.error("Error fetching searched text:", error);
        return Promise.reject(error);
      }
    },

    async fetchAllSongs({ commit, state }) {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              q: state.searchText,
              part: "snippet",
              type: "video",
              maxResults: 10,
              key: "AIzaSyBPrj12o41wT2pqmLBcdrpLVcsUmaRya9A",
            },
          }
        );
        const searchResult = response.data.items;
        commit("updateAllSongs", searchResult);
      } catch (error) {
        console.error("Error fetching all songs:", error);
      }
    },

    async fetchPlayList({ commit }) {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              q: this.state.searchText,
              part: "snippet",
              type: "video",
              maxResults: 10,
              key: "AIzaSyBPrj12o41wT2pqmLBcdrpLVcsUmaRya9A",
            },
          }
        );
        const searchResult = response.data;
        console.log("SearchResult: ", searchResult);
        commit("setPlayList", searchResult);
      } catch (error) {
        console.error("Error fetching searched text:", error);
      }
    },

    async fetchSong() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/songs/" + this.state.song
        )
        .then((response) => {
          this.commit("setUpdatedSong", response.data.content[0]);
        });
    },

    async fetchArtist() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/artists/" +
            this.state.artist
        )
        .then((response) => {
          this.commit("setUpdatedArtist", response.data.content[0]);
        });
    },

    async fetchBrowseId() {
      await axios
        .get(
          "https://yt-music-api.herokuapp.com/api/yt/artists/" +
            this.state.browseId
        )
        .then((response) => {
          this.commit("setBrowseId", response.data);
          console.log("BROWSEID: ", response.data);
        });
    },
  },

  getters: {
    getSearchResult(state) {
      console.log("got searchResult: ", state.searchResult);
      return state.searchResult;
    },

    getPlayingVideoId(state) {
      return state.playingVideoId;
    },

    getAllSongs(state) {
      console.log("GOT ALL SONGS: ", state.allSongs);
      return state.allSongs;
    },

    getPlayList(state) {
      console.log("getter in store: ", state.playList);
      return state.playList;
    },

    getVideoId(state) {
      console.log("GET VIDEOID: ", state.videoId);
      return state.videoId;
    },

    getPlayingNow(state) {
      console.log("GET NOW PLAYING: ", state.playingNow);
      return state.playingNow;
    },

    getSong(state) {
      console.log("GET UPDATED-SONG: ", state.updatedSong);
      return state.updatedSong;
    },

    getBrowseId(state) {
      console.log("GET Browse ID ", state.browseId);
      return state.browseId;
    },
  },
  modules: {},
});
