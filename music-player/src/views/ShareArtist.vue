<template>
  <div class="player-container">
    <!-- <Artist /> -->
    <div id="artist-loop">
      <Artist
        v-for="(artist, i) in getArtistName"
        :key="artist + i"
        :artist="artist"
        :type="'artist'"
      />
      <div id="show-data">
        <h2>Type: {{ this.$store.getters.getArtist.type }}</h2>
        <h4>Name: {{ this.$store.getters.getArtist.name }}</h4>
        <h4>Image: {{ this.$store.getters.getArtist.thumbnail }}</h4>
        <h4>Browse ID: {{ this.$store.getters.getArtist.browseId }}</h4>
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
      thumbnail: [],
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
