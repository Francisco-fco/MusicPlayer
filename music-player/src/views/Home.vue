<template>
  <body>
    <div class="container">
      <SearchBar />
      <div class="result-container"></div>
    </div>
  </body>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
};
</script>

<style>
body {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
</style>
