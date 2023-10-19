<template>
  <!-- <Share /> -->
  <div class="share-container">
    <div id="song-loop">
      <Song v-for="(song, i) in getSong" :key="i" :song="song" />

      <div id="show-data">
        <h2>Song:</h2>
        <h4>Name: {{ getSong.name }}</h4>
        <img v-bind:src="getSong.thumbnails[1].url">
        <h4>Artist: {{ getSong.artist.name }}</h4>
        <h4>Album: {{ getSong.album.name }}</h4>
        <h4>Id: {{ getSong.videoId }}</h4>
        <button id="play" @click="Play(this.$store.getters.getSong.videoId)">Play</button>
        <button id="pause" @click="Pause(this.$store.getters.getSong.videoId)">
          Pause
        </button>
      </div>
          </div>

  </div>
</template>

<script>
import Song from "./VideoList.vue";
export default {
  data() {
    return {
      
    };
  },
  components: {
    Song,
  },
  methods: {
    Play(play) {
      // calling global variable
      window.player.loadVideoById(play);
      window.player.playVideo();
      console.log("playing videoId");
    },
    Pause(pause) {
      window.player.pauseVideo(pause);
    },
  },

  created() {
      this.$store.commit("updateSong", this.$route.params.videoId);
      console.log("Created in SHARE videoId: ", this.$route.params.videoId);
      this.$store.dispatch("fetchSong");
  },

  computed: {
    getSong() {
      console.log("ShareSong GETTER: ", this.$store.getters.getSong);
      return this.$store.getters.getSong;
    },
  },
};
</script>

<style>
#show-data {
  margin-left: 5%;
  margin-right: 5%;
}

.share-container {
  margin-left: 20%;
  margin-right: 20%;
}

#play { 
  background-color: black;
  color: white;
  margin-left: 1vw;
  padding: 0.3vw;
  padding-left: 1vw;
  padding-right: 1vw;
  font-weight: bold;
  border-radius: 10px;

}
h4  { 
  color: white;
}

h2{
  color: white;
}

#pause {
  background-color: black;
  color: white;
  font-weight: bold;
  margin-left: 1vw;
  padding: 0.3vw;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  border-radius: 10px;
}
</style>
