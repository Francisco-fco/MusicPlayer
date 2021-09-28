import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import SharedObject from "../views/SharedObject.vue";

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
    path: "/share/:song",
    name: "ShareSong",
    component: SharedObject,
  },
  {
//  path: "/share/:song/:artist/:videoId/:url/:song",
    path: "/share/:browseId",
    name: "ShareArtist",
    component: SharedObject,

  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
