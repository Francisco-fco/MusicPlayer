<template>
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
          <button id="Previous">Prev</button>
          <button id="Play" v-if="!playingNow" @click="play()">Play</button>
          <button id="Paus" v-else @click="pause()">Paus</button>
          <button id="Next">Next</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  // Hårdkodat exempel

  name: "player-comtainer",
  data() {
    return {
      current: {},
      index: 0,
      playingNow: false,
      songs: [
        {
          title: "Regulate",
          artist: "Warren G",
          src: require('../assets/WarrenG-Regulate-ft.NateDogg.mp3')
        },
        {
          title: "Ramen and Oj",
          artist: "Joyner Lucas",
          src: require("../assets/JoynerLucas&LilBaby-Ramen&OJ.mp3"),
        },
        {
          title: "Hotel Californa",
          artist: "Gipsy Kings",
          // src: require('')
        },
        {
          title: "Regulate",
          artist: "Warren G",
          // src: require('')
        },
      ],
      // Handle the audio inside of app
      player: new Audio(),
    };
  },
  methods: {
    play(song) {
      if (typeof song != "undefined") {
          this.current = song;
          this.player.src = this.current.src;
      }
      
      this.player.play();
      this.playingNow = true;
    },

    pause() {
        this.player.pause();
        this.playingNow = false;
    }
  },
  created() {
    this.current = this.songs[this.index];
    this.player.src = this.current.src;
    //this.player.play()
  },
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
