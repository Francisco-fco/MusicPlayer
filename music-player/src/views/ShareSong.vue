<template>
    <!-- <Share /> -->
<div class="share-container">
      <div id="song-loop" v-for="(song, i) in getSong" :key="i">
        <Song :song="song" :type="'song'" />
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
        albumName: {}
    };
  },

  components: {
    Song,
  },

  computed: {
    getSong() {
      return this.$store.getters.getSong;
    },
  }
};
</script>

<style></style>
