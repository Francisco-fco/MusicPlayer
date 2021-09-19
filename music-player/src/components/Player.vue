<template>
  <!-- MIGHT NOT NEED THIS COMPONENT -->

  <div class="player-container">
    <div class="buttons">
      <button id="play" @click="Play(music.videoId)">Play</button>
      <button id="pause" @click="Pause(music.videoId)">Pause</button>
      <button id="next" @click="Next(music.videoId)">Next</button>
      <button id="share" @click="Share()">Share</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoId: this.videoId,
    };
  },

  computed: {
    getVideoId() {
      return this.$store.getters.getVideoId;
    },
  },

  components: {},

  methods: {
    play(getVideoId) {
      // calling global variable
      window.player.loadVideoById(getVideoId);
      window.player.playVideo();
      console.log("playing videoId");
    },
    pause() {
      window.player.pauseVideo();
    },

    next() {
      // let videoId = videoId;
      window.player.loadVideoById();
      window.player.nextVideo();
    },

    previous() {
      //  let videoId = videoId;
      window.player.loadVideoById();
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
