import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import ShareSong from "../components/ShareSong";
import ShareArtist from "../components/ShareArtist";
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
    path: "/share/:songName/:thumbnails/:artistName/:albumName/:videoId",
    name: "ShareSong",
    component: ShareSong,
  },
  {
//  path: "/share/:song/:artist/:videoId/:url/:song",
    path: "/share/:artistName/:thumbnails/:browseId",
    name: "ShareArtist",
    component: ShareArtist,

  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
