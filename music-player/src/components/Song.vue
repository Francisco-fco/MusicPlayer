<template>
  <div class="song-card">
    <div class="cancion" v-if="song.type == 'song'">
      <h1>Song:</h1>
      <h3>Name: {{ song.name }}</h3>
      <h3>Artist: {{ song.artist.name }}</h3>
      <h3>Album: {{ song.album.name }}</h3>
      <h3>Id: {{ song.videoId }}</h3>
      <img v-bind:src="song.thumbnails[0].url">
      <button @click="Play(song.videoId)">Play</button>
      <button @click="Pause(song.videoId)">Pause</button>
      <button @click="Share()">Share</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["song"],

  computed: {
    getSong() {
      console.log("Need to see this: ", this.$store.getters.getSong);
      return this.$store.getters.getSong;
    },
  },

  methods: {
    Play(play) {
      // calling global variable
      window.player.loadVideoById(play);
      window.player.playVideo();
      console.log("playing videoId");
    },

    Pause(pause) {
      window.player.pauseVideo(pause);
    },
    Share() {
      this.$store.commit("setSharedSong", this.song);
      this.$store.dispatch("fetchSharedSong");
      this.$router.push({ path: "/share/song"});
    },
  },
};
</script>

<style>
h1 {
  padding: 1.2vw;
}

h3 {
  margin: 0.5vw;
}

.cancion > button {
  margin-bottom: 5vh;
}
</style>
