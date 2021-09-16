<template>
  <div class="song-container">
      <h3>SONG NAME</h3>
      <h3>ARTIST NAME</h3>
      <h3>IMAGE</h3>  
  </div>
</template>

<script>
export default {
    data() {
        return {
            songs: [],
        }
    },

    props:["song"],

    methods: {
        play(){},
    },
      mounted() {
      fetch('https://yt-music-api.herokuapp.com/api/yt/search/')
        .then(res => res.json())
        .then(data => this.songs = data)
        .catch(err => console.log(err.message))
  },
}
</script>

<style>

</style>