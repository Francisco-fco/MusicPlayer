<template>
  <!-- <Share /> -->
  <div class="share-container">
    <div v-for="(song, i) in getSong" :key="i" id="song-loop">
      <Song  :song="song" :type="song" />
    </div>
  </div>
</template>

<script>
import Song from "../components/Song.vue";

export default {
  data() {
    return {};
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
    getSharedSong() {
      this.$store.dispatch("fetchSong");

      // undefined
      console.log("Need to see this: " + this.$store.getters.getSharedSong);
      return this.$store.getters.getSong;
    },


  },
};
</script>

<style></style>
