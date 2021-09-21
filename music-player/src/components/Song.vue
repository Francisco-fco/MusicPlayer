<template>
  <div class="music-card">
    <div class="cancion" v-if="music.type == 'song'">
      <h2>Type: {{ music.type }}</h2>
      <h4>Name: {{ music.name }}</h4>
      <h4>Image: {{ music.thumbnails.url }}</h4>
      <h4>Artist: {{ music.artist.name }}</h4>
      <h4>Album: {{ music.album.name }}</h4>
      <h4>Id: {{ music.videoId }}</h4>
      <button @click="Play(music.videoId)">Play</button>
      <button @click="Pause(music.videoId)">Pause</button>
      <button @click="Share()">
        <router-link
          to="/share"
          custom
          v-slot="{ href, route, navigate, isActive }"
        >
          <NavLink :active="isActive" :href="href" @click="navigate">{{
            route.fullPath
          }}</NavLink>
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      artistName: this.artistName,
    };
  },
  props: ["music"],

  computed: {
    fetchSearchList() {
      console.log("Need to see this: " + this.$store.getters.getSearchResult);
      return this.$store.getters.getSearchResult;
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
      this.$store.commit("setSharedArtist", this.artistName);
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

.cancion{
  margin-bottom: 2vh;
}
</style>
