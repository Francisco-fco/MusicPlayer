<template>
  <div class="share-container">
      <div id="song-loop" v-for="song in fetchSearchList" :key="song">
          <Song :song="song" />
      </div>
    <h1>{{ this.$store.getters.getSearchResult.song }}</h1>

    <div id="<rtist-loop" v-for="artist in fetchSearchList" :key="artist">
          <Artist :artist="artist" />
      </div>
    <h1>{{ this.$store.getters.getSearchResult.artist }}</h1>

    <div id="artist-loop" v-for="album in fetchSearchList" :key="album">
          <Album :album="album" />
      </div>
    <h1>{{ this.$store.getters.getSearchResult.album }}</h1>
  </div>
</template>

<script>
import Song from "./Song.vue";
import Artist from "./Artist.vue";
import Album from "./Album.vue";
export default {
  props: ["music"],

  components: {
      Song,
      Artist,
      Album,
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
