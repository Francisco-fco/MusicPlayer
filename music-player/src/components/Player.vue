<template>
  <div>
    <button @click="play('DXxeOvvNNwc')">The Black Page #1 on piano</button>
    <button @click="play('CtkZxnkbjtI')">The Black Page #2 live band</button>
    <button @click="pause()">Pause</button>
  </div>
  
  
  <!--
  <div class="player-container">
    <header>
      <h1>Music</h1>
    </header>
    <main>
      <section class="player">
        <h2 id="song-title">
          {{ current.title }} - <span>{{ current.artist }}</span>
        </h2>
        <div class="buttons">
          <button id="Previous" @click="previous">Prev</button>
          <button id="Play" v-if="!playingNow" @click="play">Play</button>
          <button id="Paus" v-else @click="pause">Paus</button>
          <button id="Next" @click="next">Next</button>
        </div>
      </section>
      <section class="playlist">
        <h3>My Playlist</h3>
        <button
          v-for="song in songs"
          :key="song.src"
          @click="play(song)"
          :class="song.src == current.src ? 'song playing' : 'song'"
        >
          {{ song.title }} - {{ song.artist }}
        </button>
      </section>
    </main>
  </div>
  -->
</template>

<script>
export default {
  // Hårdkodat exempel

  name: "player-comtainer",
  data() {
    return {
        /*
        
      current: {},
      index: 0,
      playingNow: false,
      songs: [
        {
          title: "Regulate",
          artist: "Warren G",
          src: require("../assets/WarrenG-Regulate-ft.NateDogg.mp3"),
        },
        {
          title: "Ramen and Oj",
          artist: "Joyner Lucas",
          src: require("../assets/JoynerLucas&LilBaby-Ramen&OJ.mp3"),
        },
      ],
      // Handle the audio inside of app
      player: new Audio(),
      */
    };
  },
  methods: {

      play(id){
      // calling global variable
      window.player.loadVideoById(id)
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    },
/*
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }

      this.player.play();
      this.player.addEventListener(
        "ended",
        function () {
          this.index++;
          if (this.index > this.songs.length - 1) {
            this.index = 0;
          }
          this.current = this.songs[this.index];
          this.play(this.current);
        }.bind(this)
      );
      this.isPlaying = true;
    },

    pause() {
      this.player.pause();
      this.playingNow = false;
    },

    next() {
      this.index++;
      if (this.index > this.songs.lenght - 1) {
        this.index = 0;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },

    previous() {
      this.index--;
      if (this.index < 0) {
        this.index = this.songs.lenght - 1;
      }

      this.current = this.songs[this.index];
      this.play(this.current);
    },
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    //this.player.play()
  },
  */
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
</style>
