<template>
  <div class="search-container">
    <input
      type="text"
      placeholder="Search..."
      v-model="searchText"
      @keyup.enter="search"
    />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchText);
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
  padding-top: 2vh;
  padding-bottom: 1vh;
  background-color: rgba(0, 0, 0, 0.068);
}

.buttons {
  color: black;
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
  padding-top: 1vh;
  padding-bottom: 2vh;
  background-color: rgba(0, 0, 0, 0.788);
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
