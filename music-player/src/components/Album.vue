<template>
  <div class="album-card">
    <div class="album" v-if="album.type == 'album'">
      <h2>Type: {{ album.type }}</h2>
      <h4>Name: {{ album.name }}</h4>
      <h4>Image: {{ album.thumbnails.Image }}</h4>
      <h4>BrowseId: {{ album.browseId }}</h4>
      <button @click="Share(album.browseId)">Share</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["album"],

  computed: {
    fetchSearchList() {
      console.log("Need to see this: " + this.$store.getters.getSearchResult);
      return this.$store.getters.getSearchResult;
    },
  },
};
</script>

<style></style>
