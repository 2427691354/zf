import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import Video from "@/components/video";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/video",
      name: "Video",
      component: Video
    }
  ]
});
