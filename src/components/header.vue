<template>
  <div class="head">
    <h1>校园疫情防控可视化平台</h1>
    <div class="weather">
      <img src="../assets/images/time4.png" alt="时间截止"/>
      <span>数据更新截止：</span>
      <span id="showTime">{{deadLine}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // headInfo: {
      //   weather: "",
      //   timer: "", //定义一个定时器的变量
      //   currentTime: "" // 获取当前时间
      // },
      deadLine: ""
    };
  },
  created() {
    // this.getWeather();
    // this.getTime();
    this.getDeadline();
  },
  methods: {
    // getWeather() {
    //   var self = this;
    //   //加载天气查询插件
    //   AMap.plugin("AMap.Weather", function() {
    //     //创建天气查询实例
    //     var weather = new AMap.Weather();
    //     //执行实时天气信息查询
    //     weather.getLive("泰州市", (err, data) => {
    //       self.headInfo.weather = data.weather;
    //     });
    //   });
    // },
    // getTime() {
    //   var self = this; //声明一个变量指向Vue实例this，保证作用域一致
    //   this.timer = setInterval(function() {
    //     self.headInfo.currentTime = //修改数据date
    //       new Date().getFullYear() +
    //       "-" +
    //       (new Date().getMonth() + 1) +
    //       " " +
    //       new Date().getDate() +
    //       " " +
    //       new Date().getHours() +
    //       ":" +
    //       new Date().getMinutes() +
    //       ":" +
    //       new Date().getSeconds();
    //   }, 1000);
    // },
    getDeadline() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getNewTime")
        .then(function(response) {
          var res = response.data;
          self.deadLine = res;
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>

<style scoped>
.head {
  height: 1.05rem;
  background: url(../assets/images/t.png) no-repeat center 0.4rem;
  background-size: 100% 50%;
  position: relative;
  z-index: 100;
}
.head h1 {
  /* color: #fff; */
  text-align: center;
  font-size: 0.35rem;
  line-height: 0.8rem;
  padding-top: 0.1rem;
  background-image: -webkit-gradient(
    linear,
    left 0,
    right 0,
    from(rgb(107, 252, 194)),
    to(rgb(162, 236, 247))
  );
  /*必需加前缀 -webkit- 才支持这个text值 */
  -webkit-background-clip: text;
  /*text-fill-color会覆盖color所定义的字体颜色： */
  -webkit-text-fill-color: transparent;
}
.head h1 img {
  width: 1.5rem;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.2rem;
}
.weather {
  position: absolute;
  right: 0.3rem;
  top: 0;
  line-height: 0.75rem;
}
.weather img {
  width: 0.3rem;
  display: inline-block;
  vertical-align: middle;
  padding-top: 0.04rem;
  padding-right: 0.05rem;
}
.weather span {
  /* color: rgba(255, 255, 255, 0.7); */
  color: #00E6FD;
  font-size: 0.17rem;
  vertical-align: middle;
  padding-right: 0.01rem;
}
</style>