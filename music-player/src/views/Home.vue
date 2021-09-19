<template>
  <div class="container">
    <Player />
    <SearchBar />
    <div class="result-container"></div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import Player from "../components/Player.vue";
export default {
  components: {
    SearchBar,
    Player,
  },
};
</script>

<style></style>
