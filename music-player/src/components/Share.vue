<template>
  <div class="share-container">
    <div id="<song-loop" v-for="(song, i) in fetchSearchList" :key="i">
      <Song :song="song" />
    </div>
    <h1>{{ this.$store.getters.getSearchResult.song }}</h1>

    <div id="<artist-loop" v-for="(artist, i) in fetchSearchList" :key="i">
      <Artist :artist="artist" />
    </div>
    <h1>{{ this.$store.getters.getSearchResult.artist }}</h1>

    <div id="album-loop" v-for="(album, i) in fetchSearchList" :key="i">
      <Album :album="album" />
    </div>
    <h1>{{ this.$store.getters.getSearchResult.album }}</h1>
  </div>
</template>

<script>
import Song from "./Song.vue";
import Artist from "./Artist.vue";
export default {
  props: ["song", "artist"],

  components: {
    Song,
    Artist,
  },

  computed: {
    fetchSearchList() {
      return this.$store.getters.getSearchResult;
    },
  },
};
</script>

<style></style>
