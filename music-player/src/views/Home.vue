<template>
  <div class="container">
    <SearchBar />
    <br>
    <SearchArtist />
    <br>
    <SearchSong />
    <div class="result-container"></div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import SearchArtist from "../components/SearchArtist.vue";
import SearchSong from "../components/SearchSong.vue";
export default {
  components: {
    SearchBar,
    SearchArtist,
    SearchSong
  },
};
</script>

<style></style>
