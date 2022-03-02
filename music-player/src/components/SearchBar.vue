<template>
  <div class="search-container">
    <input
      type="text"
      id="search"
      placeholder="Search..."
      v-on:keyup.enter="search(searchText)"
      v-model="searchText"
    />
    <div class="buttons">
      <button id="previous" @click="previous()">PREV</button>
      <button id="play" @click="play()">▶</button>
      <button id="pause" @click="pause()">STOP</button>
      <button id="next" @click="next()">NEXT</button>
      <button id="playlist" @click="getPlayList()">Playlist</button>
    </div>

    <div v-if="isClicked" class="playing-now">
      <h2>Now playing:</h2>
      <h3>{{ fetchArtistName.name }}</h3>
      <h3>{{ fetchPlayingNow.name }}</h3>
    </div>

    <!-- <Song /> -->
    <div class="share-container">
      <div id="song-loop" v-for="(song, i) in fetchAllSongs" :key="i">
        <Song :song="song" :type="song" />
      </div>
    </div>
  </div>
</template>

<script>
import Song from "./Song.vue"; 

export default {

  data() {
    return {
      isClicked: false,
      searchText: this.searchText,
    };
  },

  components: {
    Song,
  },

  computed: {
    fetchSearchList() {
      console.log(
        "THIS IS searchTextResult: ",
        this.$store.getters.getSearchResult
      );
      return this.$store.getters.getSearchResult;
    },

    fetchAllSongs() {
      console.log(
        "THIS IS allSongsResultList: ",
        this.$store.getters.getAllSongs
      );
      return this.$store.getters.getAllSongs;
    },

    fetchPlayList() {
      return this.$store.getters.getPlayList;
    },

    fetchPlayingNow() {
      console.log("ARTIST NAME: ", this.$store.getters.getPlayingNow.artist.name);
      return this.$store.getters.getPlayingNow;
    },

    fetchArtistName() {
      return this.$store.getters.getPlayingNow.artist;
    }
  },

  methods: {
    search() {
      console.log("THIS IS searchText: ", this.searchText);

      this.$store.commit("updateSearchText", this.searchText);
      this.$store.dispatch("fetchSearchedText");
      this.$store.dispatch("fetchAllSongs", this.searchText);
      this.$store.dispatch("fetchAllArtists", this.searchText);
      this.$store.dispatch("fetchPlayList", this.searchText);
    },

    play() {
      console.log("CLICK");
      this.isClicked = !this.isClicked;
      const play = this.$store.getters.getAllSongs[0];
      if (play) {
        window.player.loadVideoById(play);
        window.player.playVideo(play);
        this.$store.commit("setPlayingNow", play);
        console.log("PLAYING NOW: ", play);
      } else {
        return null;
      }
    },

    getPlayList() {
      const playList =
        this.$store.getters.getAllSongs[
          this.$store.getters.getAllSongs.findIndex(
            (song) => song === this.$store.state.playingNow
          )
        ];
      if (playList) {
        window.player.loadVideoById(playList);
        window.player.playVideo(playList);
        this.$store.commit("setPlayingNow", playList);
        console.log("PLAYING NOW: ", playList);
      } else {
        return null;
      }
    },

    pause() {
      this.isClicked = false;
      window.player.pauseVideo();
    },

    previous() {
      const prev =
        this.$store.getters.getAllSongs[
          this.$store.getters.getAllSongs.findIndex(
            (song) => song === this.$store.state.playingNow
          ) - 1
        ];
      if (prev) {
        window.player.loadVideoById(prev);
        window.player.playVideo(prev);
        this.$store.commit("setPlayingNow", prev);
        console.log("PREVIOUS", prev);
      } else {
        return null;
      }
    },

    next() {
      const next =
        this.$store.getters.getAllSongs[
          this.$store.getters.getAllSongs.findIndex(
            (song) => song === this.$store.state.playingNow
          ) + 1
        ];
      if (next) {
        window.player.loadVideoById(next);
        window.player.playVideo(next);
        this.$store.commit("setPlayingNow", next);
        console.log("NEXT", next);
      } else {
        return null;
      }
    },
  },
};
</script>

<style>
#song-loop {
  background-color: darkred;
  color: #ffffff;
  margin: 2vw;
  border-radius: 2vw;
}

#artist-loop {
  background-color: rgba(0, 0, 0, 0.788);
  color: #ffffff;
  margin: 2vw;
  border-radius: 2vw;
}

#album-loop {
  background-color: rgba(0, 0, 0, 0.788);
  color: #ffffff;
  margin: 2vw;
  border-radius: 2vw;
}

input {
  width: 40%;
  padding: 0.5vw;
  margin: 1vw;
}

.searchResult > div {
  margin: 2vw;
  font-size: 18;
}

.search-container {
  background-color: rgba(0, 0, 0, 0.74);
}

.buttons {
  display: flex;
  justify-content: center;
  padding: 1vw;
  margin-left: 45%;
  margin-right: 45%;
  border-radius: 15px;
}

.playing-now {
  margin-left: 35vw;
  margin-right: 35vw;
  padding-bottom: 1vh;
  padding-top: 1vh;
  background-color: darkred;
}

.playing-now > h3 {
  color: white;
}

#play {
  background-color: black;
  color: white;
  margin-left: 1vw;
  padding: 0.3vw;
  padding-left: 1vw;
  padding-right: 1vw;
  font-weight: bold;
  border-radius: 10px;
}

#previous {
  background-color: black;
  color: white;
  font-weight: bold;
  padding: 0.3vw;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  border-radius: 10px;
}

#next {
  background-color: black;
  color: white;
  font-weight: bold;
  margin-left: 1vw;
  padding: 0.3vw;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  border-radius: 10px;
}

#pause {
  background-color: black;
  color: white;
  font-weight: bold;
  margin-left: 1vw;
  padding: 0.3vw;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  border-radius: 10px;
}

#playlist {
  background-color: black;
  color: white;
  font-weight: bold;
  margin-left: 1vw;
  padding: 0.3vw;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  border-radius: 10px;
}
</style>
