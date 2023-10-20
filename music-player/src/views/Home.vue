<template>
  <div class="container">
    <SearchBar @search="searchVideos" />
    <div v-if="videos.length">
      <VideoList :videos="videos" @play="playVideo" />
    </div>
    <div class="container">
    <h1>QR code generator</h1>

    <sl-input maxlength="255" clearable label="Value" v-model="qrCode"></sl-input>

    <sl-qr-code :value="qrCode"></sl-qr-code>
  </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import VideoList from "../components/VideoList.vue";
import { ref } from 'vue';
  import '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
  import '@shoelace-style/shoelace/dist/components/input/input.js';

  const qrCode = ref();

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
      console.log('VIDEOS IN HOME: ', this.videos)
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
