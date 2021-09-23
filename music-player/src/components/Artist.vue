<template>
  <div class="artist-card">
    <div class="artista" v-if="artist.type == 'artist'">
      <h1>Artist:</h1>
      <h3>Name: {{ artist.name }}</h3>
      <h3>Browse ID: {{ artist.browseId }}</h3>
      <img v-bind:src="artist.thumbnails[0].url">

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
      this.$store.commit("setSharedArtist", this.browseId)
      this.$store.dispatch("fetchSharedArtist");
      this.$router.push({ path: "/share/artist/" + this.browseId});
    },
  },
  mounted() {
        //This is step 1. Here we take the id form this pages url and puts it id int in data()
        this.browseId = this.$route.params.browseId

        //This is step 2. We take the id from the id int in data() and we send it to ProgramId int in store.js
        // it will be used to fetch the correct program from springboot
        this.$store.commit("setBrowseId", this.id)

         
         this.$store.dispatch("fetchBrowseId");
    },
};
</script>

<style>
.artista > h2 {
  
}

.artista > button {
  margin-bottom: 5vh;
}
</style>
