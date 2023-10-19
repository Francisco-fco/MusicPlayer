<template>
  <div>
    <div v-for="(video, index) in videos" :key="video.id.videoId">
      <img v-bind:src="video.snippet.thumbnails.medium.url">
      <h3>{{ video.snippet.title }}</h3>
      <button @click="play(index)">Play</button>
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
.song-card {
  display: flex;
  flex-direction: column;
}
.cancion {
  position: relative;
}

.cancion > h3 {
  color: rgb(226, 213, 213);
}

.cancion > h1 {
  color: rgb(226, 213, 213);
}

#thumbnail {
  position: absolute;
  bottom: 15vh;
  left: 3vw;
}

.cancion > button {
  margin-top: 2vh;
  margin-bottom: 5vh;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
}

button {
  background-color: black;
  color: white;
  margin-left: 1vw;
  padding: 0.3vw;
  padding-left: 1vw;
  padding-right: 1vw;
  font-weight: bold;
  border-radius: 10px;
}

.share > #route{
  text-decoration: none;
  color: white;
}
</style>
