<template>
  <div class="song-card">
    <div class="cancion" v-if="song.type == 'song'">
      <h2>Type: {{ song.type }}</h2>
      <h4>Name: {{ song.name }}</h4>
      <h4>Image: {{ song.thumbnails }}</h4>
      <h4>Artist: {{ song.artist.name }}</h4>
      <h4>Album: {{ song.album.name }}</h4>
      <h4>Id: {{ song.videoId }}</h4>
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

  // Implementera med routeUrl (KOLLA RADIOAPP)
      this.$router.push({ path: "/share/song" });
    },
  },
};
</script>

<style>
h2 {
  padding: 1.2vw;
}

h4 {
  margin: 0.5vw;
}

.cancion {
  margin-bottom: 2vh;
}
</style>
