<template>
  <div class="search-container">
    <input
      type="text"
      id="search"
      placeholder="Search for songs/albums or artist!"
      v-on:keyup.enter="search(searchText)"
      v-model="searchText"
    />
    <div class="searchResult">
      <ol>
        <li v-for="music in fetchSearchList.content" :key="music">
          <Music :music="music" />
        </li>
      </ol>
    </div>
    {{ fetchSearchList.content }}
  </div>
</template>

<script>
import Music from "../components/Music.vue";
export default {
  data() {
    return {
      searchText: this.searchText,
      searchResult: this.searchResult,
      videoId: this.videoId,
    };
  },

  components: {
    Music,
  },

  computed: {
    getVideoId() {
      return this.$store.getters.getVideoId;
    },

    fetchSearchList() {
      console.log("I NEED TO SE THIS: " + this.$store.getters.getSearchResult.content);
      return this.$store.getters.getSearchResult;
    },
  },

  methods: {
    search() {
      this.$store.commit("updateSearchText", this.searchText);
      this.$store.commit("setVideoId", this.videoId);
      this.$store.dispatch("fetchSearchedText");
      this.$store.dispatch("fetchVideoId")
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
</style>
