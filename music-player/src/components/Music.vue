<template>
  <div class="music-card">
    <div class="cancion" v-if="music.type == 'song'">
      <h2>Type: {{ music.type }}</h2>
      <h4>Name: {{ music.name }}</h4>
      <h4>Image: {{ music.thumbnails }}</h4>
      <h4>Artist: {{ music.artist.name }}</h4>
      <h4>Album: {{ music.album.name }}</h4>
      <h4>Id: {{ music.videoId }}</h4>
      <button @click="Play(music.videoId)">Play</button>
      <button @click="Pause(music.videoId)">Pause</button>
      <button @click="Share()">
        <router-link
          to="/share"
          custom
          v-slot="{ href, route, navigate, isActive}"
        >
          <NavLink :active="isActive" :href="href" @click="navigate">{{
            route.fullPath
          }}</NavLink>
        </router-link>
      </button>
    </div>
    <div class="artista" v-if="music.type == 'artist'">
      <h2>Type: {{ music.type }}</h2>
      <h4>Artist: {{ music.name }}</h4>
      <h4>Image: {{ music.thumbnails.url }}</h4>
      <h4>Browse ID: {{ music.browseId }}</h4>
      <button @click="Share(music.browseId)">Share</button>
    </div>
    <div class="album" v-if="music.type == 'album'">
      <h2>Type: {{ music.type }}</h2>
      <h4>Name: {{ music.name }}</h4>
      <h4>Image: {{ music.thumbnails.url }}</h4>
      <h4>BrowseId: {{ music.browseId }}</h4>
      <button @click="Share(music.browseId)">Share</button>
    </div>
  </div>
</template>

<script>
export default {
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

    Share() {},
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
</style>
