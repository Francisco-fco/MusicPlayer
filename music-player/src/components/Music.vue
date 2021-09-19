<template>
  <div class="music-card">
    <div class="cancion" v-if="music.type == 'song'">
      <p>Type: {{ music.type }}</p>
      <p>Name: {{ music.name }}</p>
      <p>Artist: {{ music.artist.name }}</p>
      <p>Album: {{ music.album.name }}</p>
      <p>Id: {{ music.videoId }}</p>
      <button @click="Play(music.videoId)">Play</button>
      <button @click="Share()">Share song</button>
    </div>
    <div class="artista" v-if="music.type == 'artist'">
        <p>Type: {{ music.type }}</p>
        <p>Artist: {{ music.name }}</p>
        <p>Browse ID: {{ music.browseId }}</p>
        <button @click="Share(music.browseId)">Share artist</button>
    </div>
    <div class="album" v-if="music.type == 'album'">
        <p>Type: {{ music.type }}</p>
        <p>Name: {{ music.name }}</p>
        <p>BrowseId: {{ music.browseId }}</p>
        <button @click="Share(music.browseId)">Share album</button>
    </div>
  </div>
</template>

<script>
export default {
    // data() {
    //     return{
    //         videoId: "",
    //         name: "",
    //     }
    // },

    props: ['music'],

    computed: {
        fetchSearchList() {
        console.log(this.$store.getters.getSearchResult);
        return this.$store.getters.getSearchResult;
    },
    },

    methods: {
        Play(play) {
      // calling global variable
      window.player.loadVideoById(play);
      window.player.playVideo();
      console.log("playing videoId");
    },
    },

}
</script>

<style></style>
