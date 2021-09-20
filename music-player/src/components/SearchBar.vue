<template>
  <div class="search-container">
    <div id="isPlaying">
      <h2>Now Playing: </h2>
    </div>
    <input
      type="text"
      id="search"
      placeholder="Search for songs/albums or artist!"
      v-on:keyup.enter="search(searchText)"
      v-model="searchText"
    />
    <div class="searchResult">
        <div v-for="music in fetchSearchList" :key="music">
          <Music :music="music" />
        </div>
    </div>
  <!--  {{ fetchSearchList.content }} -->
  </div>
</template>

<script>
import Music from "../components/Music.vue";
export default {
  data() {
    return {
      searchText: this.searchText,
      searchResult: this.searchResult,
    };
  },

  components: {
    Music,
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
