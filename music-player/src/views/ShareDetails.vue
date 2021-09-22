<template>
  <div class="share-container">
    <!-- <Share /> -->
   <Player />
  </div>
</template>

<script>
import Player from "../components/Player.vue";

export default {
  data() {
    return {
        artistName: {},
        songName: {},
        albumName: {}
    };
  },

  components: {
    Player,
  },
};
</script>

<style></style>
