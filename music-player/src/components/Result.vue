<template>
  <div class="result-container">
       <span>{{ this.$store.state.searchResult}}</span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            searchResult: this.searchResult,
        }
    },

 computed: {
    searchedResult() {
      return this.$store.getters.getSearchResult;
    },
  },
}
</script>

<style>

</style>