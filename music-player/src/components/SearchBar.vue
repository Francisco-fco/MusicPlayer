<template>
  <div class="search-container">
    <input
      type="text"
      id="search"
      placeholder="Search for songs/albums or artist!"
      v-on:keyup.enter="search(searchText)"
      v-model="searchText"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: this.searchText,
    };
  },

  methods: {
    search() {
      this.$store.commit("updateSearchText", searchText);
      this.$store.dispatch("fetchSearchedText");
    },
  },
};
</script>

<style></style>
