<template>
  <!-- <Share /> -->
  <div class="share-container">
    <div id="song-loop">
      <Song v-for="(song, i) in getSong" :key="i" :song="song" />
    </div>

      <div id="show-data">
        <h2>Song:</h2>
        <h4>Name: {{ getSong.name }}</h4>
        <img v-bind:src="getSong.thumbnails[1].url">
        <h4>Artist: {{ getSong.artist.name }}</h4>
        <h4>Album: {{ getSong.album.name }}</h4>
        <h4>Id: {{ getSong.videoId }}</h4>
        <button @click="Play(this.$store.getters.getSong.videoId)">Play</button>
        <button @click="Pause(this.$store.getters.getSong.videoId)">
          Pause
        </button>
      </div>
  </div>
</template>

<script>
import Song from "./Song.vue";
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

  mounted() {
      this.$store.commit("updateSong", this.$route.params.song);
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

<style></style>
