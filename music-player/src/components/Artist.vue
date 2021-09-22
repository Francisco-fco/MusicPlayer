<template>
  <div class="artist-card">
    <div class="artista" v-if="artist.type == 'artist'">
      <h2>Type: {{ artist.type }}</h2>
      <h4>Artist: {{ artist.name }}</h4>
      <h4>Image: {{ artist.thumbnails }}</h4>
      <h4>Browse ID: {{ artist.browseId }}</h4>
      <button @click="Share()"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["artist"],

  computed: {
    getArtistName() {
      console.log("Need to see this: " + this.$store.getters.getArtist);
      return this.$store.getters.getArtist;
    },
  },
  methods: {
    Share() {
      this.$store.commit("setSharedArtist", this.artist);
      this.$store.dispatch("fetchSharedArtist");
      this.$router.push({ path: "/share" });
    },
  },
};
</script>

<style></style>
