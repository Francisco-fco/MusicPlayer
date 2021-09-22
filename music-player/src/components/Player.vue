<template>
  <div class="player-container">
    <!-- <Artist /> -->
    <div id="artist-loop" v-for="(artist, i) in fetchSearchList" :key="i">
      <Artist :artist="artist" :type="'artist'" />
    </div>
    <h1>{{ this.$store.getters.getArtist }}</h1>

    <div class="share-container">
      <div id="song-loop" v-for="(song, i) in fetchSearchList" :key="i">
        <Song :song="song" :type="'song'" />
      </div>
     <h1> {{ this.$store.getters.getSong }} </h1>

      <Album />
      <div id="album-loop" v-for="(album, i) in fetchSearchList" :key="i">
        <Album :album="album" :type="'album'" />
      </div>
    </div>
  </div>
</template>

<script>
import Artist from "../components/Artist.vue";
import Song from "../components/Song.vue";
import Album from "../components/Album.vue";
export default {
  data() {
    return {};
  },

  components: {
    Artist,
    Song,
    Album,
  },
};
</script>

<style></style>
