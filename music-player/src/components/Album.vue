<template>
  <div class="album" v-if="music.type == 'album'">
      <h2>Type: {{ music.type }}</h2>
      <h4>Name: {{ music.name }}</h4>
      <h4>Image: {{ music.thumbnails.url }}</h4>
      <h4>BrowseId: {{ music.browseId }}</h4>
      <button @click="Share(music.browseId)">Share</button>
    </div>
</template>

<script>
export default {
    props: ["music"],

  computed: {
    fetchSearchList() {
      console.log("Need to see this: " + this.$store.getters.getSearchResult);
      return this.$store.getters.getSearchResult;
    },
  },

}
</script>

<style>

</style>