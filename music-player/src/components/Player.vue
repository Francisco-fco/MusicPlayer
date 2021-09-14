<template>
  <div class="player-container">
      <header>
          <h1>Music</h1>
      </header>
      <main>
          <section class="player">
              <h2 id="song-title">{{ current.title }}</h2>
          </section>
      </main>
  </div>
</template>

<script>
export default {
// Hårdkodat exempel

    name: 'player-comtainer',
    data () {
        return {
           current: {
               title: 'Another brick in the wall'
           },
           songs: [
               {
                   title: 'Another brick in the wall',
                   artist: 'Pink Floyd',
                   // src: require('')
               },
               {
                   title: 'Hotel Californa',
                   artist: 'Gipsy Kings',
                   // src: require('')
               }
           ] 
        }
    }
}
</script>

<style>

*{
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