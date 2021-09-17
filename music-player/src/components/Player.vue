<template>
  <div class="player-container">
    <div class="song-container">
      <h3>SONG NAME</h3>
      <h3>ARTIST NAME</h3>
      <h3>IMAGE</h3>
    </div>
    <SearchBar />
    <div class="buttons">
      <!-- SOMETHING LIKE THAT (content.videoId)  -->
      <button id="play" v-on:click="play(result)">Play</button>

      <button id="pause" @click="pause()">Pause</button>
      <button id="next" @click="next()">Next</button>
      <button id="previous" @click="previous()">Previous</button>
    </div>
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  data() {
    return {
      searchResult: this.searchResult,
    };
  },

  components: {
    SearchBar,
  },

  methods: {
    play(result) {
      // calling global variable
      window.player.loadVideoById();
      // this.$store.commit("updateVideoId", this.videoId)

      //--- "fetchSearchedText" ALREADY IN SEARCHBAR DISPATCH --------------------------------------------
      // this.$store.dispatch("fetchSearchedText");
      window.player.playVideo(result);
      console.log("playing videoId");
    },
    pause() {
      window.player.pauseVideo();
    },

    next() {
      let videoId = videoId;
      window.player.loadVideoById(videoId);
      window.player.nextVideo();
    },

    previous() {
      let videoId = videoId;
      window.player.loadVideoById(videoId);
      window.player.previousVideo();
    },

    computed: {
      fetchSearchResult() {
       let result = this.$store.getter.getSearchResult;
       result.videoId;
      }
    }
    /*mounted() {
      fetch("https://yt-music-api.herokuapp.com/api/yt/search/" + searchId)
        .then((res) => res.json())
        .then((data) => (this.songs = data))
        .catch((err) => console.log(err.message));
    },*/
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input {
  width: 40%;
  padding: 0.5vw;
  margin: 1vw;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  background-color: brown;
  color: whitesmoke;
}

.buttons {
  display: flex;
  justify-content: center;
  padding: 1vw;
  background-color: chocolate;
  margin-left: 30%;
  margin-right: 30%;
}

.buttons > button {
  margin-right: 1vw;
  padding: 0.5vw;
}
</style>
