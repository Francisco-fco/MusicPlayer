
<template>
<div id="nav">
  <div class="routes">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <div>
    <img class="beats" src="./assets/beatsbyFCO.png" alt="">
  </div>
    

</div>
  <router-view />
  
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  position: relative;
  padding: 8vh;
  background-color: darkred;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

.beats {
  position: absolute;
  bottom: 2.4vh;
  left: 1vw;
  width: 10%;
  border-radius: 15px;
}
</style>