<template>
  <div class="song-card">
    <div class="cancion" v-if="song.type == 'song'">
      <h1>Song:</h1>
      <h3>Name: {{ song.name }}</h3>
      <h3>Artist: {{ song.artist.name }}</h3>
      <h3>Album: {{ song.album.name }}</h3>
      <h3>Id: {{ song.videoId }}</h3>
      <img v-bind:src="song.thumbnails[1].url" />
      <button @click="Play(song.videoId)">Play</button>
      <button @click="Pause(song.videoId)">Pause</button>
      <button @click="Share()">
        <router-link :to="'/share/' + song.videoId">Share</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ["song"],

  computed: {
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
     this.$store.commit("updateSong", this.song.videoId);
     this.$store.dispatch("fetchSong")
      //  this.$router.push({ path: "/share/song" });
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

.cancion > img {
  position: absolute;
  right: 75vw;
  bottom: 15vh;
  border-radius: 1vw;
}

.cancion > button {
  margin-top: 2vh;
  margin-bottom: 5vh;
  margin-left: 1.5vw;
  margin-right: 1.5vw;
}
</style>
