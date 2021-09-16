<template>
  <div class="container">
    <SearchBar />
    <Player />
  </div>
</template>

<script>
import Player from "../components/Player.vue";
import SearchBar from "../components/SearchBar.vue";
export default {
  components: {
    Player,
    SearchBar,
  }

}
</script>

<style>

</style>