<template>
  <div class="search-container">
    <div id="isPlaying">
      <h2>Now Playing:</h2>
    </div>

    <!--  -->
    <input
      type="text"
      id="search"
      placeholder="Search for songs/albums or artist!"
      v-on:keyup.enter="search(searchText)"
      v-model="searchText"
    />
    <!-- <Song /> -->
    <div class="share-container">
      <div id="song-loop" v-for="(song, i) in fetchSearchList" :key="i">
        <Song :song="song" :type="song" />
      </div>

      <!-- <Artist /> -->
      <div id="artist-loop" v-for="(artist, i) in fetchSearchList" :key="i">
        <Artist :artist="artist" :type="artist" />
      </div>

      <!-- <Album /> -->
      <div id="album-loop" v-for="(album, i) in fetchSearchList" :key="i">
        <Album :album="album" :type="album" />
      </div>
    </div>
  </div>
</template>

<script>
import Artist from "./Artist.vue";
import Song from "./Song.vue";
import Album from "./Album.vue";

export default {
  data() {
    return {
      searchText: this.searchText,
      searchResult: this.searchResult,
      artistName: this.artistName,
    };
  },

  components: {
    Song,
    Artist,
    Album,
  },

  computed: {
    fetchSearchList() {
      console.log("I NEED TO SE THIS: ", this.$store.getters.getSearchResult);
      return this.$store.getters.getSearchResult;
    },
  },

  methods: {
    search() {
      this.$store.commit("updateSearchText", this.searchText);
      this.$store.dispatch("fetchSearchedText");
    },
    Share() {
      this.$store.commit("setSharedArtist", this.artistName);
    },
  },
};
</script>

<style>
input {
  width: 40%;
  padding: 0.5vw;
  margin: 1vw;
}

.searchResult > div {
  margin: 1.5vw;
  font-size: 18;
}
</style>
