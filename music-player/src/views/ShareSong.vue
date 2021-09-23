<template>
  <!-- <Share /> -->
  <div class="share-container">
    <div id="song-loop">
      <Song v-for="(song, i) in getSong" :key="i" :song="song" :type="'song'" />

      <div id="show-data">
        <h2>Song:</h2>
        <h4>Name: {{ this.$store.getters.getSong.name }}</h4>
        <img v-bind:src="this.$store.getters.getSong.thumbnails[1].url">
        <h4>Artist: {{ this.$store.getters.getSong.artist.name }}</h4>
        <h4>Album: {{ this.$store.getters.getSong.album.name }}</h4>
        <h4>Id: {{ this.$store.getters.getSong.videoId }}</h4>
        <button @click="Play(this.$store.getters.getSong.videoId)">Play</button>
        <button @click="Pause(this.$store.getters.getSong.videoId)">
          Pause
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Song from "../components/Song.vue";

export default {
  data() {
    return {
      artistName: {},
      songName: {},
      albumName: {},
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

  computed: {
    getSong() {
      return this.$store.getters.getSong;
    },
  },
};
</script>

<style></style>
