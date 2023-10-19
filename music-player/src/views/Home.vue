<template>
  <div class="container">
    <SearchBar @search="searchVideos" />
    <div v-if="videos.length">
      <VideoList :videos="videos" @play="playVideo" />
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import VideoList from "../components/VideoList.vue";

export default {
  components: {
    SearchBar,
    VideoList,
  },
  data() {
    return {
      videos: [],
      currentVideoIndex: null,
    };
  },
  methods: {
    searchVideos(searchText) {
      this.$store.dispatch("fetchSearchedText", searchText).then((videos) => {
        this.videos = videos;
      });
    },
    playVideo(index) {
      this.currentVideoIndex = index;
      const videoId = this.videos[index].id.videoId;
      console.log('PLAY THIS: ', videoId)
      this.$store.commit("setPlayingVideo", videoId);
      window.player.playVideo(videoId)
    },
  },
  computed: {
    playingVideoId() {
      console.log('IN HOME: ', this.$store.getters.getPlayingVideoId)
      return this.$store.getters.getPlayingVideoId;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

</style>
