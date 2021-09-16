<template>
  <div class="container">
    <SearchBar />
    <Player />
    <Result />
  </div>
</template>

<script>
import Player from "../components/Player.vue";
import SearchBar from "../components/SearchBar.vue";
import Result from "../components/Result.vue";
export default {
  components: {
    Player,
    SearchBar,
    Result,
  }

}
</script>

<style>

</style>