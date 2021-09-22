<template>
<div class="share-container">
    <div id="song-loop" v-for="(song, i) in fetchSearchList" :key="i">
      <Song :song="song" />
    </div>
    <h1>{{ this.$store.getters.getSearchResult.song }}</h1>

    <div id="artist-loop" v-for="(artist, i) in fetchSearchList" :key="i">
      <Artist :artist="artist" />
    </div>
    <h1>{{ this.$store.getters.getSearchResult.artist }}</h1>

    <div id="album-loop" v-for="(album, i) in fetchSearchList" :key="i">
      <Album :album="album" />
    </div>
    <h1>{{ this.$store.getters.getSearchResult.album }}</h1>
  </div>
  
</template>

<script>
import Song from '../components/Song.vue';
import Artist from '../components/Artist.vue';
export default {
    components: {
        Song,
        Artist,
    },
    
    computed: {},

}
</script>

<style>

</style>