<template>
  <div>
    <div v-for="(video, index) in videos" :key="video.id.videoId">
      <img v-bind:src="video.snippet.thumbnails.medium.url">
      <h3>{{ video.snippet.title }}</h3>
      <span class="button">
        <button @click="play(index)">Play</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videos: Array,
  },
  methods: {
    play(index) {
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
