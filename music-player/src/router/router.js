import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import ShareSong from "../views/ShareSong";
import ShareArtist from "../views/ShareArtist";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/share/song",
    name: "Share-Song",
    component: ShareSong,
  },
  {
//  path: "/share/:this.song.name/this.song.artist/:this.song.videoId/url/song",
    path: "/share/artist/:browseId",
    name: "Share-Artist",
    component: ShareArtist,

  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
