<template>
  <!-- MIGHT NOT NEED THIS COMPONENT -->

  <div class="player-container">
    <div class="buttons">
      <button id="previous" @click="Prev(music.videoId)">Prev</button>
      <button id="next" @click="Next(music.videoId)">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["music"],

  computed: {
    fetchSearchList() {
      console.log(this.$store.getters.getSearchResult);
      return this.$store.getters.getSearchResult;
    },
  },

  components: {},

  methods: {
    Next(next) {
      // let videoId = videoId;
      window.player.loadVideoById(next);
      window.player.nextVideo();
    },

    Prev(previous) {
      //  let videoId = videoId;
      window.player.loadVideoById(previous);
      window.player.previousVideo();
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

input {
  width: 40%;
  padding: 0.5vw;
  margin: 1vw;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vw;
  background-color: brown;
  color: whitesmoke;
}

.buttons {
  display: flex;
  justify-content: center;
  padding: 1vw;
  margin: 1vw;
  background-color: chocolate;
  margin-left: 30%;
  margin-right: 30%;
}

.buttons > button {
  margin-right: 1vw;
  padding: 0.5vw;
}
</style>
