<template>
  <div class="player-container">
    <!-- <Artist /> -->
    <div id="artist-loop" v-for="(artist, i) in getArtistName" :key="i">
      <Artist :artist="artist" :type="'artist'" /> 
    </div>
  </div>
</template>

<script>
import Artist from "../components/Artist.vue";
export default {
  data() {
    return {};
  },

  components: {
    Artist,
  },

  computed: {
    getArtistName() {
      console.log("Need to see this: " + this.$store.getters.getArtist);
      return this.$store.getters.getArtist;
    },
  }
};
</script>

<style>

</style>