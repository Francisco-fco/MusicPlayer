import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import ShareSong from "../components/ShareSong.vue";
import ShareArtist from "../components/ShareArtist.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/share/song/:videoId",
    name: "ShareSong",
    component: ShareSong,
    props: (route) => ({
      videoId: route.params.videoId,
    }),
  },
  {
    path: "/share/artist/:channelId",
    name: "ShareArtist",
    component: ShareArtist,
    props: (route) => ({
      channelId: route.params.channelId,
    }),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
