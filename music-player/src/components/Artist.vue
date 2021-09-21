<template>
  <div class="artista" v-if="music.type == 'artist'">
      <h2>Type: {{ music.type }}</h2>
      <h4>Artist: {{ music.name }}</h4>
      <h4>Image: {{ music.thumbnails.url }}</h4>
      <h4>Browse ID: {{ music.browseId }}</h4>
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