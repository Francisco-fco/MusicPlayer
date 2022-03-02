<template>
  <div class="song-card">
    <div class="cancion" v-if="song.type == 'song'">
      <h1>Song:</h1>
      <h3>Name: {{ song.name }}</h3>
      <h3>Artist: {{ song.artist.name }}</h3>
      <h3>Album: {{ song.album.name }}</h3>
      <h3>Id: {{ song.videoId }}</h3>
      <div id="thumbnail">
        <img v-bind:src="song.thumbnails[1].url" />
      </div>
        <button @click="Play(song.videoId)">Play</button>
        <button @click="Pause(song.videoId)">Stop</button>
        <button class="share">
          <router-link id="route"
            :to="
              routerSongLink
            "
            >Share</router-link
          >
        </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ["song"],

  computed: {
    routerSongLink() {
      let thumbNail = encodeURIComponent(this.song.thumbnails[1]);
      return(
      '/share/' +
            this.song.name +
            '/' +
            thumbNail +
            '/' +
            this.song.artist.name +
            '/' +
            this.song.album.name +
            '/' +
            this.song.videoId
            )
    } 
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

    loadPlayList(array) {
      window.loadPlaylist(array)
    }
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

.cancion {
  position: relative;
}

.cancion > h3 {
  color: black;
}

.cancion > h1 {
  color: black;
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
