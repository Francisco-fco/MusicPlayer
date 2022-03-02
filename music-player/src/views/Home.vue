<template>
  <body>
    <div class="container">
      <SearchBar />
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
  margin: 0;
  padding: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

</style>
