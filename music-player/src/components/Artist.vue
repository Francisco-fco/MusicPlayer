<template>
  <div class="artist-card">
    <div class="artista" v-if="artist.type == 'artist'">
      <h1>Artist:</h1>
      <h3>Name: {{ artist.name }}</h3>
      <h3>Browse ID: {{ artist.browseId }}</h3>
      <img v-bind:src="artist.thumbnails[1].url" />

      <button>
        <router-link :to="routerArtistLink">Share</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: ["artist"],

  methods: {},

  computed: {
    routerArtistLink() {
      let thumbNail = encodeURIComponent(this.artist.thumbnails[1]);
      return (
        "/share/" +
        this.artist.name +
        "/" +
        thumbNail +
        "/" +
        this.artist.browseId
      );
    },
  },
};
</script>

<style>
.artista > button {
  margin-bottom: 5vh;
  margin-bottom: 2.5vh;
}
.artista {
  position: relative;
}
.artista > img {
  position: absolute;
  right: 75vw;
  bottom: 3.8vh;
  border-radius: 1vw;
}

.artista {
  position: relative;
}

.artista > img {
  position: absolute;
  right: 75vw;
  bottom: 3.5vh;
  border-radius: 1vw;
}
.artista > button {
  margin-bottom: 5vh;
}
</style>
