<template>
  <div>
    <div v-for="(video) in videos" :key="video.id.videoId">
      <img v-bind:src="video.snippet.thumbnails.medium.url">
      <h3>{{ video.snippet.title }}</h3>
      <span class="button">
        <button @click="play(video.id.videoId)">Play</button>
      </span>
      <div v-if="selectedVideoId">
        <iframe :src="'https://www.youtube.com/embed/' + video.id.videoId" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videos: Array,
  },
  data() {
    return {
      selectedVideoId: null,
    };
  },
  methods: {
    play(index) {
      this.selectedVideoId = index;
      this.$emit("play", index);
    },
  },
};
</script>

<style>

img {
  margin-top: 1vh;
}

button {
  background-color: black;
  color: white;
  margin-left: 1vw;
  margin-bottom: 1vh;
  padding: 0.3vw;
  padding-left: 1vw;
  padding-right: 1vw;
  font-weight: bold;
  border-radius: 10px;
}

</style>
