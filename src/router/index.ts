import { createRouter, createWebHistory } from "vue-router/auto";
import Home from "@/pages/Home.vue";
import SearchResult from "@/pages/SearchResult.vue";
import Artist from "@/pages/Artist.vue";
import ArtDetail from "@/pages/ArtDetail.vue";
import MovementDetail from "@/pages/MovementDetail.vue";
import About from "@/pages/About.vue";
import Terms from "@/pages/Terms.vue";
import Privacy from "@/pages/Privacy.vue";
import Help from "@/pages/Help.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/search",
      name: "SearchResult",
      component: SearchResult,
    },
    {
      path: "/artist",
      name: "Artist",
      component: Artist,
    },
    {
      path: "/art/:slug",
      name: "ArtDetail",
      component: ArtDetail,
      props: true,
    },
    {
      path: "/movementdetail",
      name: "MovementDetail",
      component: MovementDetail,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/terms",
      name: "Terms",
      component: Terms,
    },
    {
      path: "/privacy",
      name: "Privacy",
      component: Privacy,
    },
    {
      path: "/help",
      name: "Help",
      component: Help,
    },
  ],
});

router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
