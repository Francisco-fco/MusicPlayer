<template>
  <div class="search-container">
    <div class="playingNow">
       
      </div>

    <!--  -->
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
      <button id="pause" @click="pause()">PAUSE</button>
      <button id="next" @click="next()">NEXT</button>
    </div>
    <!-- <Song /> -->
    <div class="share-container">
      <!-- <div id="song-loop" v-for="(song, i) in fetchSearchList" :key="i">
        <Song :song="song" :type="song" />
      </div> -->

      <div id="song-loop" v-for="(song, i) in fetchAllSongs" :key="i">
        <Song :song="song" :type="song" />
      </div>


      <!-- <div id="artist-loop" v-for="(artist, i) in fetchSearchList" :key="i">
        <Artist :artist="artist" :type="artist" />

      </div> -->

      <!-- <Artist /> -->
      <div id="artist-loop" v-for="(artist, i) in fetchAllArtists" :key="i">
        <Artist :artist="artist" :type="artist" />

      </div>

      <!-- <Album /> -->
      <!-- <div id="album-loop" v-for="(album, i) in fetchSearchList" :key="i">
        <Album :album="album" :type="album" />
      </div> -->
    </div>
  </div>
</template>

<script>
import Artist from "./Artist.vue";
import Song from "./Song.vue";

export default {
  data() {
    return {
      searchText: this.searchText,
    };
  },

  components: {
    Song,
    Artist,
  //  Album,
  },

  computed: {
    fetchSearchList() {
      console.log("THIS IS searchTextResult: ", this.$store.getters.getSearchResult);
      return this.$store.getters.getSearchResult;
    },

    fetchAllSongs() {
      console.log("THIS IS allSongsResultList: ", this.$store.getters.getAllSongs);
      return this.$store.getters.getAllSongs;
    },

    fetchAllArtists() {
      console.log("THIS IS allArtistsResultList: ", this.$store.getters.getAllArtists);
      return this.$store.getters.getAllArtists;
    },

    fetchPlayList() {
      return this.$store.getters.getPlayList;
        },

  },

  methods: {
    search() {
      console.log("THIS IS searchText: ", this.searchText);

      this.$store.commit("updateSearchText", this.searchText);
      this.$store.dispatch("fetchSearchedText");
      this.$store.dispatch("fetchAllSongs", this.searchText);
      this.$store.dispatch("fetchAllArtists", this.searchText);

      
    },

     play(play) {
      console.log('CLICK');
      this.$store.commit('setPlayingNow');

      window.player.loadVideoById(play);
      window.player.playVideo(play);
    },

    getPlayList() {
      const play = this.$store.getters.getAllSongs[
        this.$store.getters.getAllSongs.findIndex((song) => song === this.$store.state.playingNow)
      ]
      if (play) {
        window.player.loadVideoById(play);
        window.player.playVideo(play)
        this.$store.commit('setPlayingNow', play)
        console.log('PLAYING NOW: ', play);
      } else {
        return null;
      }


    },

    pause() {
      window.player.pauseVideo();
    },
   
    previous() {
      const prev = this.$store.getters.getAllSongs[
        this.$store.getters.getAllSongs.findIndex((song) => song === this.$store.state.playingNow) - 1
      ];
      if (prev) {
        window.player.loadVideoById(prev);
        window.player.playVideo(prev);
        this.$store.commit('setPlayingNow', prev);
        console.log('PREVIOUS', prev);
      }
      else {
        return null;
      }
    },

    next() {
      const next = this.$store.getters.getAllSongs[
        this.$store.getters.getAllSongs.findIndex((song) => song === this.$store.state.playingNow) + 1
      ];
      if (next) {
        window.player.loadVideoById(next);
        window.player.playVideo(next);
        this.$store.commit('setPlayingNow', next);
        console.log('NEXT', next);
      }
      else {
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

.playingNow {
  border: solid black;
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
  border: solid black;
  background-color: darkred;
}

.buttons {
  display: flex;
  justify-content: center;
  background-color: darkred;
  padding: 1vw;
  margin-left: 45%;
  margin-right: 45%;
  border-radius: 15px;

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
</style>
