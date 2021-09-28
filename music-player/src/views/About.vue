<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  </template>
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


 ------ SHARESONG --------------------------------------------------------------


  <template>
  
  <div class="share-container">
    SOMETHING WRONG WHIT in getSongResutl 
    <div v-for="(song, i) in fetchSearchList" :key="i" id="song-loop">
      <Song :song="song" :type="song" />
    </div>

    <div class="song" v-if="$route.params.type == 'song'">
      <div v-if="getSong.song == $route.params.song"></div>

      <h1>Song:</h1>
      <h3>Name: {{ getSearchResult.song.name }}</h3>
      <h3>Artist: {{ song.artist.name }}</h3>
      <h3>Album: {{ song.album.name }}</h3>
      <h3>Id: {{ song.videoId }}</h3>
      <img v-bind:src="song.thumbnails[1].url" />
      <button @click="Play(song.videoId)">Play</button>
      <button @click="Pause(song.videoId)">Pause</button>

    </div>
  </div>
  </template>
-->



import Song from "../components/Song.vue";

export default {
  data() {
    return {
    };
  },

  components: {
    Song,
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
  },

  computed: {   
    fetchSearchList() {
      console.log("I NEED TO SE THIS: ", this.$store.getters.getSearchResult);
      return this.$store.getters.getSearchResult;
      
    }, 
    // getSharedSong() {
    //   // undefined
    //   console.log("Need to see this: " + this.$store.getters.getSong);
    //   return this.$store.getters.getSong;
    // },
  },
};
*/






<!---- SHAREARTIST ---------------------------------------------------------------
<template>

  <div class="player-container">
    
    <div id="artist-loop">
      <Artist
        v-for="(artist, i) in getArtist"
        :key="i"
        :artist="artist"
        :type="'artist'"
      />
      <div id="show-data">
        <h2>Artist:</h2>
        <h4>Name: {{ this.$store.getters.getArtist.name }}</h4>
        <h4>Browse ID: {{ this.$store.getters.getArtist.browseId }}</h4>
        <img v-bind:src="this.$store.getters.getArtist.thumbnails[1].url">
      </div> 
    </div>
  </div>
  </template>
  -->



// import Artist from "../components/Artist.vue";
// export default {
//   data() {
//     return {};
//   },

//   components: {
//     Artist,
//   },

//   computed: {
//     getSharedArtist() {
//       console.log("Need to see this: " + this.getters.getSharedArtist.name);
//       return this.$store.getters.getSharedArtist.name;
//     },
//   },
// };

