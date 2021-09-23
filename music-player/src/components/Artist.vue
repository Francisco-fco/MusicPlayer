<template>
  <div class="artist-card">
    <div class="artista" v-if="artist.type == 'artist'">
      <h1>Artist:</h1>
      <h3>Name: {{ artist.name }}</h3>
      <h3>Browse ID: {{ artist.browseId }}</h3>
      <img v-bind:src="artist.thumbnails[1].url">

      <button @click="Share()">Share</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thumbnails: this.thumbnails,
      browseId: this.browseId,
      thisId: '',
    };
  },
  props: ["artist"],

  computed: {
    getArtistName() {
      console.log("Need to see this: " + this.$store.getters.getArtist);
      return this.$store.getters.getArtist;
    },

    getBrowseId() {
      let browseId = this.$store.getters.getBrowseId;

      return browseId;
    },
  },
  methods: {
    Share() {
      this.$store.commit("setSharedArtist", this.artist)
      this.$store.dispatch("fetchSharedArtist")
      this.$router.push({ path: "/share/artist/" + this.browseId});
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

.artista > button {
  margin-bottom: 5vh;
}
</style>
