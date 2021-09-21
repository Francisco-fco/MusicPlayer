<template>
  <div class="artist-card">
    <div class="artista" v-if="artist.type == 'artist'">
      <h2>Type: {{ artist.type }}</h2>
      <h4>Artist: {{ artist.name }}</h4>
      <h4>Image: {{ artist.thumbnails }}</h4>
      <h4>Browse ID: {{ artist.browseId }}</h4>
      <button @click="Share()">
        <router-link
          to="/share"
          custom
          v-slot="{ href, route, navigate, isActive }"
        >
          <NavLink :active="isActive" :href="href" @click="navigate">{{
            route.fullPath
          }}</NavLink>
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artistName: this.artistName,
    }
  },
  props: ["artist"],

  computed: {
    fetchSearchList() {
      console.log("Need to see this: " + this.$store.getters.getSearchResult);
      return this.$store.getters.getSearchResult;
    },
  },
  method: {
    Share() {
      this.$store.commit("updateArtist" + this.artistName);

    },
  },
};
</script>

<style></style>
