<template>
  <div class="search-container">

    <!--  -->
    <input
      type="text"
      id="search"
      placeholder="Search..."
      v-on:keyup.enter="search(searchText)"
      v-model="searchText"
    />
    <!-- <Song /> -->
    <div class="share-container">
      <div id="song-loop" v-for="(song, i) in fetchSearchList" :key="i">
        <Song :song="song" :type="song" />
      </div>

      <div id="song-loop" v-for="(song, i) in fetchAllSongs" :key="i">
        <Song :song="song" :type="song" />
      </div>


      <div id="artist-loop" v-for="(artist, i) in fetchSearchList" :key="i">
        <Artist :artist="artist" :type="artist" />

      </div>

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
// import Album from "./Album.vue";

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
      return this.$store.getters.getSearchResult;
    },

    fetchAllSongs() {
      console.log("THIS IS allSongsResultList: ", this.$store.getters.getAllSongs);
      return this.$store.getters.getAllSongs;
    },

    fetchAllArtists() {
      console.log("THIS IS allArtistsResultList: ", this.$store.getters.getAllArtists);
      return this.$store.getters.getAllArtists;
    }
  },

  methods: {
    search() {
      console.log("THIS IS searchText: ", this.searchText);

      this.$store.commit("updateSearchText", this.searchText);
      this.$store.dispatch("fetchSearchedText");
      this.$store.dispatch("fetchAllSongs", this.searchText);
      this.$store.dispatch("fetchAllArtists", this.searchText);

      
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
</style>
