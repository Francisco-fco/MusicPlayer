<template>
  <div class="share-container">
      <div id="share-loop" v-for="music in getArtistName" :key="music">
          <Song :music="music" />
      </div>
    <h1>{{}}</h1>
  </div>
</template>

<script>
import Song from "./Song.vue";
export default {
  props: ["music"],

  components: {
      Song,
  },

  computed: {
    fetchSearchList() {
      return this.$store.getters.getSearchResult;
    },

    getArtistName(state) {
      console.log("GET ARTISTNAME", state.artistName);
      return state.artistName;
    },
  },
};
</script>

<style></style>
