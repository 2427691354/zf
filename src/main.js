// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Axios from "axios";
import ElementUI from "element-ui";
import echarts from "echarts";
import AMap from "vue-amap";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
// import VideoPlayer from "vue-video-player";
// Vue.use(VideoPlayer);
Vue.use(ViewUI);
Vue.use(ElementUI);
Vue.use(AMap);
Vue.prototype.$echarts = echarts;

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.prototype.baseUrl = "http://139.196.78.182:8088";
Vue.prototype.staticUrl = "http://47.101.33.200:8080/static/siitep";
Vue.prototype.staticUrl2 = "http://139.224.68.139:8080/jietu2/";
// Vue.prototype.baseUrl = "http://localhost:8088";

// 引入公共public.js
import "./assets/css/comon0.css";
import "../node_modules/echarts/map/js/china.js"; // 引入中国地图数据
import "element-ui/lib/theme-chalk/index.css";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
