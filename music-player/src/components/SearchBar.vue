<template>
  <div class="search-container">
    <div id="isPlaying">
      <h2>Now Playing: </h2>
    </div>

    <!--  -->
    <input
      type="text"
      id="search"
      placeholder="Search for songs/albums or artist!"
      v-on:keyup.enter="search(searchText)"
      v-model="searchText"
    />
    <div class="searchResult">
        <div v-for="song in fetchSearchList" :key="song">
          <Song :song="song" />
        </div>        
    </div>
    <br>
    <hr>
    <br>
    <div class="searchResult">
        <div v-for="artist in fetchSearchList" :key="artist">
          <Artist :artist="artist" />
        </div>        
    </div>
    <br />
    <hr />
    <br />
    <div class="searchResult">
        <div v-for="album in fetchSearchList" :key="album">
          <Album :album="album" />
        </div>        
    </div>
  <!--  {{ fetchSearchList.content }} -->
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
     // this.$store.commit("setVideoId", this.videoId);
      this.$store.dispatch("fetchSearchedText");
     // this.$store.dispatch("fetchVideoId");
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
