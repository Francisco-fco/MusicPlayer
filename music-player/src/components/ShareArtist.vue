<template>
  <div class="player-container">
    <!-- <Artist /> -->
    <div id="artist-loop">
      <Artist v-for="(artist, i) in getArtist"
        :key="i"
        :artist="artist"
      />
      <div id="show-data">
        <h2>Artist:</h2>
        <h4>Name: {{ this.$store.getters.getArtist.name }}</h4>
        <h4>Browse ID: {{ this.$store.getters.getArtist.browseId }}</h4>
        <img v-bind:src="this.$store.getters.getArtist.thumbnails[1].url">
      </div>
    </div>
  </div>
</template>

<script>
import Artist from "./Artist.vue";
export default {
  data() {
    return {
      
    };
  },

  components: {
    Artist,
  },

   created() {
      this.$store.commit("updateArtist", this.$route.params.browseId);
      console.log("Created in SHARE browseId: ", this.$route.params.browseId);
      this.$store.dispatch("fetchArtist");

   },

  computed: {
    getArtist() {
      console.log("Need to see this: " + this.$store.getters.getArtist);
      return this.$store.getters.getArtist;
    },
  },
};
</script>

<style>
#show-data {
  color: #ffffff;
  padding: 2vw;
  border-radius: 2vw;
}
</style>
