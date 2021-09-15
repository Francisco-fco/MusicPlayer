<template>
  <div class="about">
    <h1>This is an about page</h1>
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

   // Hårdkodat exempel
/*
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
     
    };
  },
   */


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
  -->
</template>
