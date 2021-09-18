<template>
  <div class="search-container">
    <input
      type="text"
      id="search"
      placeholder="Search for songs/albums or artist!"
      v-on:keyup.enter="search(searchText)"
      v-model="searchText"
    />
    <span>{{ searchText }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: this.searchText,
      searchResult: this.searchResult,
    };
  },

  methods: {
    search() {
      this.$store.commit("updateSearchText", this.searchText);
      this.$store.dispatch("fetchSearchedText");
    },
  },
};
</script>

<style></style>
