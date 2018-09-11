import Vue from "vue";
import Router from "vue-router";
import LyTab from "ly-tab";
import First from "@/pages/quarter/First";
import Second from "@/pages/quarter/Second";
import Third from "@/pages/quarter/Third";
import Fourth from "@/pages/quarter/Fourth";

Vue.use(Router);
Vue.use(LyTab);

export default new Router({
  routes: [
    {
      path: "/year/",
      name: "First",
      component: First
    },
    {
      path: "/year/second",
      name: "Second",
      component: Second
    },
    {
      path: "/year/third",
      name: "Third",
      component: Third
    },
    {
      path: "/year/fourth",
      name: "Fourth",
      component: Fourth
    }
  ]
});
