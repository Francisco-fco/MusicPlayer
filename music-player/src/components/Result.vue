<template>
  <div class="result-container">
    <span>{{ this.$store.state.searchResult }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResult: this.searchResult,
    };
  },
};
</script>

<style></style>
