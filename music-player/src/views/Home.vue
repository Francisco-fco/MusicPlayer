<template>
  <div class="container">
    <Player />
    <div class="result-container">
    <span>{{ this.$store.state.searchResult }}</span>
  </div>
  </div>
</template>

<script>
import Player from "../components/Player.vue";
export default {
  components: {
    Player,
  }

}
</script>

<style>

</style>