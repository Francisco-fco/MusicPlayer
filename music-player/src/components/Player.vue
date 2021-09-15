<template>
  <div class="buttons">
    <button id="play" @click="play('eFEjDCMNqYs')">1</button>
    <button @click="play('HQ1nvhLf1EU')">2</button>
    <button id="pause" @click="pause()">Pause</button>
    <button id="next" @click="next()">Next</button>
    <button id="previous" @click="previous()">Previous</button>
  </div>
</template>

<script>
export default {
    data() {
    return {
    
        
      current: {},
      index: 0,
      playingNow: false,
      songs: [
        {
          title: "Regulate",
          artist: "Warren G",
          src: "eFEjDCMNqYs",
        },
        {
          title: "Ramen and Oj",
          artist: "Joyner Lucas",
          src: 'HQ1nvhLf1EU',
        },
      ],
      
     
    };
  },
 
  methods: {
    play(id) {
      // calling global variable
      window.player.loadVideoById(id);
      window.player.playVideo();
    },
    pause() {
      window.player.pauseVideo();
    },

    next() {
      window.player.nextVideo();
    },

    previous() {
      window.player.previousVideo();
    },
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

.buttons {
    display: flex;
    justify-content: center;
    padding: 1vw;

}

.buttons > button {
    margin-right: 1vw;
    padding: 0.5vw;
}
</style>
