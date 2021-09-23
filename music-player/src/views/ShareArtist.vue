<template>
  <div class="player-container">
    <!-- <Artist /> -->
    <div id="artist-loop">
      <Artist v-for="(artist, i) in getArtistName"
        :key="i"
        :artist="artist"
        :type="'artist'"
      />
      <div id="show-data">
        <h2>Artist:</h2>
        <h4>Name: {{ this.$store.getters.getArtist.name }}</h4>
        <h4>Browse ID: {{ this.$store.getters.getArtist.browseId }}</h4>
        <img v-bind:src="this.$store.getters.getArtist.thumbnails[0].url">
      </div>
    </div>
  </div>
</template>

<script>
import Artist from "../components/Artist.vue";
export default {
  data() {
    return {
      artistName: this.artistName,
      browseId: this.browseId,
    };
  },

  components: {
    Artist,
  },

  computed: {
    getArtistName() {
      console.log("Need to see this: " + this.$store.getters.getArtist);
      return this.$store.getters.getArtist;
    },
  },
};
</script>

<style></style>
