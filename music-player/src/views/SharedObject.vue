<template>
<div>
  <ShareSong />
<br>
  <ShareArtist />
</div>  
</template>

<script>
import ShareSong from "../components/ShareSong.vue"
import  ShareArtist from "../components/ShareArtist.vue"
export default {
    components: {
        ShareSong,
        ShareArtist
    }

}
</script>

<style>

</style>