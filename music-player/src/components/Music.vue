<template>
  <div class="music-card">
    <div class="cancion" v-if="music.type == 'song'">
      <p>Type: {{ music.type }}</p>
      <p>Name: {{ music.name }}</p>
      <p>Image: {{ music.thumbnails.url }}</p>
      <p>Artist: {{ music.artist.name }}</p>
      <p>Album: {{ music.album.name }}</p>
      <p>Id: {{ music.videoId }}</p>
      <button @click="Play(music.videoId)">Play</button>
      <button @click="Pause(music.videoId)">Pause</button>
      <button @click="Share()">Share</button>
      <router-link to="/share"></router-link>;
    </div>
    <div class="artista" v-if="music.type == 'artist'">
      <p>Type: {{ music.type }}</p>
      <p>Artist: {{ music.name }}</p>
      <p>Image: {{ music.thumbnails.url }}</p>
      <p>Browse ID: {{ music.browseId }}</p>
      <button @click="Share(music.browseId)">Share</button>
    </div>
    <div class="album" v-if="music.type == 'album'">
      <p>Type: {{ music.type }}</p>
      <p>Name: {{ music.name }}</p>
      <p>Image: {{ music.thumbnails.url }}</p>
      <p>BrowseId: {{ music.browseId }}</p>
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

<style></style>
