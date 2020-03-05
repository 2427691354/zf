<template>
  <div>
    <div class="canvas" style="opacity: .2">
      <canvas id="canv" width="1920" height="572"></canvas>
    </div>
    <Header></Header>
    <div class="mainbox">
      <ul class="clearfix">
        <li>
          <div class="bar">
            <div class="barbox">
              <ul class="clearfix">
                <li
                  class="pulll_left counter"
                  style="width:30%;"
                >{{ statistics.sumAll }} - {{ statistics.sumAll }}</li>
                <li
                  class="pulll_left counter"
                  style="width:30%;"
                >{{ statistics.stuinJiang }} - {{ statistics.stuinSuzhou }}</li>
                <li class="pulll_left counter" style="width:10%;">{{ statistics.sumIsolated }}</li>
                <li class="pulll_left counter" style="width:30%;">
                  <div id="fashao"></div>
                </li>
              </ul>
            </div>
            <div class="barbox2">
              <ul class="clearfix">
                <li class="pulll_left" style="width:30%;">系部人数 - 上报人数</li>
                <li class="pulll_left" style="width:30%;">返苏人数（江苏-苏州）</li>
                <li class="pulll_left" style="width:10%;">隔离人数</li>
                <li class="pulll_left" style="width:30%;">发烧人数</li>
              </ul>
            </div>
          </div>
          <div class="map">
            <!-- <div class="suzhouNum"
                 id="polo_1">
              <div class="boxfoot"></div>
            </div>-->
            <div class="cityNum" id="polo_2">
              <div class="boxfoot"></div>
            </div>
            <div class="map4" id="map_1"></div>
          </div>

          <div class="boxall" style="height: 2.6rem;margin-top:0.15rem">
            <!-- <div class="alltitle">停课不停学图片走马灯卡片式轮播</div> -->
            <div class="allnav" id="echart5">
              <div id="allNum"></div>
              <div id="allLine"></div>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>

        <!-- 
        <li>
          <div class="boxall"
               style="height: 3.7rem">
            <div class="alltitle">实时监控</div>
            <div class="allnav"
                 id="echart1">
              <video-player class="video-player vjs-custom-skin"
                            ref="videoPlayer1"
                            :options="playerOptions1"></video-player>
            </div>
            <div class="boxfoot"></div>
          </div>

          <div class="boxall"
               style="height: 1.2rem">
            
            <div id="demo">
              <div id="indemo">
                <div id="demo1">
                  <img :src="staticUrl2 + item.img"
                       v-for="item in this.noMask"
                       :key="item.title" />

                
                </div>
                <div id="demo2">
                  <img :src="staticUrl2  + item.img"
                       v-for="item in this.noMask"
                       :key="item.title" />
                </div>
              </div>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall"
               style="height: 4.7rem;">
            <div class="alltitle">战“疫”频道</div>
            <div class="allnav"
                 id="echart3">
              <Tabs v-model="activename"
                    type="card">
                <TabPane label="诊　断"
                         name="name1"
                         id="resou"></TabPane>
                <TabPane label="知　识"
                         name="name2"
                         id="zhishi"></TabPane>
                <TabPane label="辟　谣"
                         name="name3"
                         class="piyao">
                  <ul>
                    <li class="piyao_list"
                        v-for="item in this.piyao"
                        :key="item.title">【谣】{{item.title}}</li>
                  </ul>
                </TabPane>
              </Tabs>
            </div>
            <div class="boxfoot"></div>
          </div>
        </li>-->

        <li>
          <div class="boxall" style="height:3.7rem">
            <div class="alltitle">防疫宣传视频</div>
            <div class="allnav" id="echart4">
              <video-player
                class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :options="playerOptions2"
              ></video-player>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxallinfo" style="height: 3rem;">
            <div class="alltitle">重点关注学生信息表</div>
            <div class="allnav" id="echart5" style="height:2.4rem">
              <el-table
                :data="stuInfo"
                stripe
                style="font-size: 10%"
                :row-style="{ height: '0.4rem' }"
                :cell-style="{ padding: '0px' }"
              >
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="class" label="班级"></el-table-column>
                <el-table-column prop="tem" label="体温(℃)"></el-table-column>
                <el-table-column prop="status" label="状态"></el-table-column>
                <el-table-column prop="address" label="隔离地点"></el-table-column>
              </el-table>
            </div>
            <div class="boxfoot"></div>
          </div>
          <div class="boxall" style="height: 2.85rem;">
            <div class="alltitle">战“疫”频道</div>
            <div class="allnav">
              <!-- <div id="word_zs"></div> -->
              <Tabs v-model="activename" type="card">
                <TabPane label="诊　断" name="name1" id="resou"></TabPane>
                <TabPane label="知　识" name="name2" id="zhishi"></TabPane>
                <TabPane label="辟　谣" name="name3" class="piyao">
                  <ul>
                    <li
                      class="piyao_list"
                      v-for="item in this.piyao"
                      :key="item.title"
                    >【谣】{{item.title}}</li>
                  </ul>
                </TabPane>
              </Tabs>
            </div>

            <div class="boxfoot"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="back"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
import "videojs-flash";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import { videoPlayer } from "vue-video-player";
import Header from "@/components/header";
export default {
  data() {
    return {
      staticUrl: this.staticUrl,
      staticUrl2: this.staticUrl2,
      activename: "name1",
      statistics: {
        sumAll: 0,
        sumIsolated: 0,
        sumHever: 0,
        stuinSuzhou: 0,
        stuinJiang: 0
      },
      //
      // img_list2: ["lb1", "lb2", "lb3", "lb4", "lb5"],
      //轮播图图片
      img_list: [],
      // 图片父容器高度
      bannerHeight: 1000,
      // 浏览器宽度
      screenWidth: 0,
      playerOptions1: {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        techOrder: ["flash", "html5"], // 兼容顺序
        flash: {
          hls: { withCredentials: false },
          swf: "static/video-js.swf" // 引入静态文件swf
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            // 流配置，数组形式，会根据兼容顺序自动切换
            type: "rtmp/mp4",
            src: "rtmp://139.224.68.139:1935/play/mask.mp4"
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: false
      },
      playerOptions2: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "13:5", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        techOrder: ["flash", "html5"], // 兼容顺序
        flash: {
          hls: { withCredentials: false },
          swf: "static/video-js.swf" // 引入静态文件swf
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            // 流配置，数组形式，会根据兼容顺序自动切换
            type: "video/mp4",
            src: this.staticUrl + "/video/1.mp4" //url地址
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      },
      resou: [],
      zhishi: [],
      piyao: [],
      //
      //学生总人数
      data_alllist: [],
      //学生隔离人数
      data_gelilist: [],
      //学生发烧人数
      data_fashaolist: [],
      //重点疫区
      keyarea: [],

      lowfever: null,
      normal: null,
      moderatefever: null,
      highfever: null,
      //重点关注学生信息
      stuInfo: [],

      //学生在苏人数
      Num_suzhou: [],
      //学生江苏人数
      Num_js: [],
      //几号
      days: [],

      //省份
      provinces: [],
      //人数
      pronum: [],
      Num_geli: [],
      Num_fashao: [],
      days2: []
    };
  },
  components: {
    Header,
    videoPlayer
  },
  created() {
    //学生隔离人数
    this.insulateNum();
    //学生发烧人数
    this.feverNum();
    //表格自动滚动
    this.play();
    // 获取未带口罩的图片
    // this.noMaskList();
  },
  mounted() {
    this.$refs.videoPlayer.player.play();
    // this.$refs.videoPlayer1.player.play();
    // 宏观统计 总人数、隔离人数、发烧人数
    this.initSum();
    this.resizeFontsize();
    //改变横屏竖屏执行效果更换
    window.addEventListener("orientationchange", this.resizeFontsize());
    //改变手机大小执行效果更换
    window.addEventListener("resize", this.resizeFontsize());
    this.map();
    this.canves();
    this.initwordcould1();
    this.initwordcould2();
    this.initwordcould3();
    this.initHuan();
    //学生各省物理分布人数
    this.allNum();
    //轮播图
    this.slideShow();
    //重点关注学生
    this.focusStu();
    // this.gundong();
    //选项卡自动播放
    this.tabxunhuan();
    //隔离人数折线图
    this.suzhouStu();
    //发烧人数折线图
    this.eachpro();
    //隔离、发烧人数趋势
    this.trendNum();
  },
  methods: {
    tabchange() {
      if (this.activename == "name1") {
        this.activename = "name2";
      } else if (this.activename == "name2") {
        this.activename = "name3";
      } else if (this.activename == "name3") {
        this.activename = "name1";
      }
    },
    tabxunhuan() {
      setInterval(this.tabchange, 8000);
    },
    tabclear() {
      clearInterval(this.tabxunhuan);
    },
    setSize: function() {
      // 通过浏览器宽度(图片宽度)计算高度
      this.bannerHeight = (400 / 1920) * this.screenWidth;
    },
    initHuan() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getTemperatureGradeRatio")
        .then(function(response) {
          var res = response.data;
          self.lowfever = res[0].lowfever;
          self.normal = res[0].normal;
          self.moderatefever = res[0].moderatefever;
          self.highfever = res[0].highfever;
          self.drawHuan();
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    },
    drawHuan() {
      var huan = echarts.init(document.getElementById("fashao"));
      const option = {
        color: ["#1ABDE6", "#EE6911", "#EE1111"],
        data: ["低热", "中热", "高热"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        // grid: {
        //   left: 'center', // right: 0,
        //   bottom: 0,
        //   top: 0,
        //   containLabel: false
        // },
        legend: {
          orient: "vertical",
          top: "15%",
          bottom: "15%",
          right: "25%",
          textStyle: {
            color: "rgba(255, 255, 255, 0.7)",
            fontSize: '0.01rem'
          },
          icon: "circle",
          itemWidth: 6, // 设置宽度
          itemHeight: 6, // 设置高度
          itemGap: 1 // 设置间距
        },
        series: [
          // 主要展示层的
          {
            radius: ["55%", "75%"],
            center: ["40%", "50%"],
            type: "pie",
            label: {
              normal: {
                show: false,
                position: "outside"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "15"
                  // fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false,
                length: 20,
                length2: 35
              },
              emphasis: {
                show: true
              }
            },
            name: "体温等级比例",
            data: [
              {
                value: this.lowfever,
                name: "低热",
                label: {
                  normal: {
                    show: false,
                    formatter: "低热\n{d}%",
                    position: "center",
                    textStyle: {
                      color: "#fff",
                      fontSize: 10
                    }
                  },
                  emphasis: {
                    show: true
                  }
                }
              },
              {
                value: this.moderatefever,
                name: "中热",
                label: {
                  normal: {
                    formatter: function(params) {
                      return params.percent;
                    },
                    position: "center",
                    show: true,
                    textStyle: {
                      fontWeight: "bold"
                    }
                  }
                }
              },
              {
                value: this.highfever,
                name: "高热",
                label: {
                  normal: {
                    show: false,
                    formatter: "高热\n{d}%",
                    position: "center",
                    textStyle: {
                      color: "#fff",

                      fontSize: 10
                    }
                  },
                  emphasis: {
                    show: true
                    // textStyle: {
                    //     fontSize: '30',
                    //     fontWeight: 'bold'
                    // }
                  }
                }
              }
            ]
          }, // 边框的设置
          {
            radius: ["75%", "73%"],
            center: ["40%", "50%"],
            type: "pie",
            hoverAnimation: false,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            animation: true,
            tooltip: {
              show: false
            },
            data: [
              {
                value: 1,
                itemStyle: {
                  color: "rgba(250,250,250,0.3)"
                }
              }
            ]
          }
        ]
      };

      huan.setOption(option);
    },
    initSum() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/sum")
        .then(function(response) {
          var res = response.data;
          self.statistics.sumAll = res.sum;
          self.statistics.sumIsolated = res.sumisolated;
          self.statistics.sumHever = res.sumhever;
          self.statistics.stuinSuzhou = res.stuinSuzhou;
          self.statistics.stuinJiang = res.stuinJiang;
          // window.location.reload();
          self.totalNum();
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    },
    slideShow() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/pictures/selectByType?type=1")
        .then(function(response) {
          var res = response.data;
          self.img_list = res;
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    },
    initwordcould1() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/prevent/selectFromDiagnosisTitle")
        .then(function(response) {
          var res = response.data;
          var newres = [];
          res = JSON.parse(JSON.stringify(res).replace(/title/g, "name"));
          res = res.map(obj => {
            return {
              name: obj.name
            };
          });
          res.map((item, index) => {
            newres.push(
              Object.assign({}, item, {
                value: Math.round(Math.random() * 100)
              })
            );
          });

          self.resou = newres.slice(0, 50);
          self.wordCould1();
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    },
    initwordcould2() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/prevent/selectFromGuideTitle")
        .then(function(response) {
          var res = response.data;
          var newres = [];
          res = JSON.parse(JSON.stringify(res).replace(/title/g, "name"));
          res = res.map(obj => {
            return {
              name: obj.name
            };
          });
          res.map((item, index) => {
            newres.push(
              Object.assign({}, item, {
                value: Math.round(Math.random() * 100)
              })
            );
          });

          self.zhishi = newres.slice(0, 50);
          self.wordCould2();
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    },
    initwordcould3() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/prevent/selectRumorTitle")
        .then(function(response) {
          var res = response.data;
          // var newres = [];
          // res = JSON.parse(JSON.stringify(res).replace(/title/g, "name"));
          // res = res.map(obj => {
          //   return {
          //     name: obj.name
          //   };
          // });
          // res.map((item, index) => {
          //   newres.push(
          //     Object.assign({}, item, {
          //       value: Math.round(Math.random() * 100)
          //     })
          //   );
          // });
          self.piyao = res;
          // self.wordCould3();
        })
        .catch(function(error) {
          console.log(error);
          // window.location.reload();
        });
    },
    wordCould1() {
      var wc = echarts.init(document.getElementById("resou"));
      var option = {
        series: [
          {
            type: "wordCloud",
            shape: "circle",
            //maskImage: maskImage,
            left: "center",
            top: "10%",
            width: "100%",
            height: "80%",
            right: null,
            bottom: null,
            sizeRange: [5, 30],
            rotationRange: [-45, 70],
            autoSize: {
              enable: true,
              minSize: 6
            },
            tooltip: {
              show: true,
              trigger: "item",
              formatter: "name"
            },
            textPadding: 0,
            // rotationStep: 45,
            // gridSize: 8,
            drawOutOfBound: false,
            textStyle: {
              normal: {
                fontFamily: "sans-serif",
                fontWeight: "bold",
                // Color can be a callback function or a color string
                color: function() {
                  // Random color
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 256),
                      Math.round(Math.random() * 256),
                      Math.round(Math.random() * 256)
                    ].join(",") +
                    ")"
                  );
                }
              }
            },
            data: this.resou
          }
        ]
      };
      wc.setOption(option);

      window.addEventListener("resize", function() {
        wc.resize();
      });
    },
    wordCould2() {
      var wc = echarts.init(document.getElementById("zhishi"));
      var option = {
        series: [
          {
            type: "wordCloud",
            shape: "circle",
            //maskImage: maskImage,
            left: "10%",
            top: "center",
            width: "100%",
            height: "80%",
            right: null,
            bottom: null,
            sizeRange: [5, 30],
            rotationRange: [-45, 60],
            autoSize: {
              enable: true,
              minSize: 6
            },
            tooltip: {
              show: true,
              trigger: "item",
              formatter: "name"
            },
            textPadding: 0,
            // rotationStep: 45,
            // gridSize: 8,
            drawOutOfBound: false,
            textStyle: {
              normal: {
                fontFamily: "sans-serif",
                fontWeight: "bold",
                // Color can be a callback function or a color string
                color: function() {
                  // Random color
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 256),
                      Math.round(Math.random() * 256),
                      Math.round(Math.random() * 256)
                    ].join(",") +
                    ")"
                  );
                }
              }
            },
            data: this.zhishi
          }
        ]
      };
      wc.setOption(option);
      window.addEventListener("resize", function() {
        wc.resize();
      });
    },
    wordCould3() {
      var wordcould = echarts.init(document.getElementById("piyao"));
      const option = {
        series: [
          {
            type: "wordCloud",
            shape: "circle",
            //maskImage: maskImage,
            left: "center",
            top: "center",
            width: "100%",
            height: "80%",
            right: null,
            bottom: null,
            sizeRange: [10, 30],
            rotationRange: [-45, 70],
            autoSize: {
              enable: true,
              minSize: 6
            },
            tooltip: {
              show: true,
              trigger: "item",
              formatter: "name"
            },
            textPadding: 0,
            // rotationStep: 45,
            // gridSize: 8,
            drawOutOfBound: false,
            textStyle: {
              normal: {
                fontFamily: "sans-serif",
                fontWeight: "bold",
                // Color can be a callback function or a color string
                color: function() {
                  // Random color
                  return (
                    "rgb(" +
                    [
                      Math.round(Math.random() * 256),
                      Math.round(Math.random() * 256),
                      Math.round(Math.random() * 256)
                    ].join(",") +
                    ")"
                  );
                }
              }
            },
            data: this.piyao
          }
        ]
      };
      wordcould.setOption(option);
      window.addEventListener("resize", function() {
        wordcould.resize();
      });
    },
    allNum() {
      var self = this;
      var dd = [];
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuInProvince")
        .then(function(response) {
          var res = response.data;
          for (var i = 0; i < res.length; i++) {
            dd.push({
              name: res[i].location_province,
              value: res[i].count
            });
          }
          self.map(dd);
        });
      //重点疫区
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuInProvince")
        .then(function(response) {
          var res = response.data;
          for (var i = 0; i < res.length; i++) {
            if (
              res[i].location_province == "湖北" ||
              res[i].location_province == "河南" ||
              res[i].location_province == "浙江" ||
              res[i].location_province == "安徽"
            ) {
              self.keyarea.push({
                location_province: res[i].location_province,
                count: res[i].count
              });
            }
          }
          self.map(dd);
        });
    },
    eachpro() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuInProvince")
        .then(function(response) {
          //冒泡排序根据count从大到小
          var res = response.data;
          var j, k, temp;
          for (j = 0; j < res.length; j++) {
            for (k = j + 1; k < res.length; k++) {
              if (res[j].count < res[k].count) {
                temp = res[j];
                res[j] = res[k];
                res[k] = temp;
              }
            }
          }
          // console.log(aa);
          for (var i = 0; i < res.length; i++) {
            self.provinces.push(res[i].location_province);
            self.pronum.push(res[i].count);
          }
          //取前十
          self.provinces = self.provinces.slice(0, 10);
          self.pronum = self.pronum.slice(0, 10);
          // console.log(self.pronum);
          // console.log(self.location_province);

          self.proBar();
        });
    },
    proBar() {
      var myChart = this.$echarts.init(document.getElementById("polo_2"));
      var color = [
        "#2EC7E6",
        "#FF5500",
        "#FFDD33",
        "#2FC25B",
        "#3063FF",
        "#2EC7E6",
        "#FF5500",
        "#FFDD33",
        "#2FC25B",
        "#3063FF"
      ];

      var option = {
        title: {
          text: "各省分布人数Top10",
          // sublink: "#",
          top: 0,
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: "150%"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: function(objs, index) {
            let obj = objs[0];
            return `${obj.name}<br/>${obj.marker}${obj.seriesName} : ${obj.value}`;
          }
        },
        grid: {
          top: "3%",
          left: "3%",
          right: "6%",
          bottom: "1%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false, //隐藏y轴坐标轴线
            lineStyle: {
              color: "#00D4C7"
              // rotate:20
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          type: "category",
          boundaryGap: true,
          //倒序
          inverse: true,
          axisTick: {
            //y轴刻度线
            show: false
          },
          axisLabel: {
            //y轴文本旋转角度
            // rotate: 30
            fontSize: "150%"
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#00D4C7"
            }
          },
          data: this.provinces
        },
        series: [
          {
            name: "分布人数",
            barMaxWidth: 20, //柱状宽度
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  color: "#ffffff",
                  fontSize: "12"
                }
              }
            },
            data: this.pronum.map(function(item, i) {
              return {
                value: item,
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#00FFE3"
                      },
                      {
                        offset: 1,
                        color: "#4693EC"
                      }
                    ])
                  }
                }
              };
            })
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    insulateNum() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuIsolatedInProvince")
        .then(function(response) {
          var res = response.data;
          self.data_gelilist = res;
        });
    },
    feverNum() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuHotInProvince")
        .then(function(response) {
          var res = response.data;
          self.data_fashaolist = res;
        });
    },
    resizeFontsize() {
      var width = document.documentElement.clientWidth;
      document.documentElement.style.fontSize = width / 20 + "px";
      //width/(效果图片宽度/文本字体大小(100))
    },
    map(datalist) {
      var myChart = this.$echarts.init(document.getElementById("map_1"));
      var geoCoordMap = {};
      var mapFeatures = this.$echarts.getMap("china").geoJson.features;
      mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name;
        // console.log(name);
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
      });
      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].location_province];
          if (geoCoord) {
            res.push({
              name: data[i].location_province,
              value: geoCoord.concat(data[i].count)
            });
          }
        }
        return res;
      };
      var option = {
        // title: {
        //   text: "学生地理分布",
        //   subtext: "数据来源 苏工院",
        //   sublink: "#",
        //   top: "5%",
        //   left: "center",
        //   textStyle: {
        //     color: "#fff"
        //   }
        // },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (typeof params.value[2] == "undefined") {
              return (
                option.series[0].name +
                "<br/>" +
                params.name +
                " : " +
                params.value
              );
            } else {
              return params.name + " : " + params.value[2];
            }
          }
        },
        legend: {
          data: ["隔离人数", "发烧人数", "重点疫区"],
          icon: "pin", //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，
          orient: "vertical",
          right: "20%",
          top: "40%",
          textStyle: {
            color: "#dcdcdc",
            fontSize: "150%"
          }
        },
        //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
        visualMap: {
          show: false,
          min: 0, //最小值
          max: 100, //最大值
          left: "25%",
          bottom: "5%",
          calculable: true, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
          seriesIndex: [0], //不会覆盖其他type颜色
          inRange: {
            color: ["#CCFFFF", "#66CCCC", "#009999"] //颜色
          },
          textStyle: {
            color: "#fff"
          }
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#339999",
              borderColor: "#002097"
            },
            emphasis: {
              areaColor: "#CCFFCC"
            }
          }
        },
        series: [
          {
            name: "学生人数",
            geoIndex: 0,
            type: "map",

            showLegendSymbol: false,
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff"
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077"
              },
              emphasis: {
                areaColor: "#2B91B7"
              }
            },
            animation: true,
            data: datalist
          },
          {
            name: "隔离人数",
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: 15,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false,
                textStyle: {
                  color: "#fff"
                },
                backgroundColor: "rgba(0,0,0,0.5)"
              }
            },
            itemStyle: {
              show: true,
              normal: {
                color: "#FFC809",
                shadowBlur: 15,
                shadowColor: "#FFC809"
              }
            },
            zlevel: 6,
            data: convertData(this.data_gelilist)
          },
          {
            name: "发烧人数",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(this.data_fashaolist),
            symbolSize: 15,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false,
                textStyle: {
                  color: "#fff"
                },
                backgroundColor: "rgba(0,0,0,0.5)"
              }
            },
            itemStyle: {
              show: true,
              normal: {
                color: "yellow",
                shadowBlur: 10,
                shadowColor: "yellow"
              }
            },
            zlevel: 1
          },
          {
            name: "重点疫区",
            type: "effectScatter",
            data: convertData(this.keyarea),
            coordinateSystem: "geo",
            symbolSize: 15,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
                textStyle: {
                  color: "#fff"
                },
                backgroundColor: "rgba(0,0,0,0.5)"
              }
            },
            itemStyle: {
              show: true,
              normal: {
                color: "#FF5000",
                shadowBlur: 10,
                shadowColor: "#FF5000"
              }
            },
            zlevel: 10
          }
        ]
      };
      myChart.setOption(option);
      var index = 0;
      var myTime = setInterval(function() {
        myChart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: index
        });
        index++;
        if (index > 34) {
          index = 0;
        }
      }, 2000);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    canves() {
      var num = 200;
      var w = window.innerWidth;
      var h = window.innerHeight;
      var max = 100;
      var _x = 0;
      var _y = 0;
      var _z = 150;
      var dtr = function(d) {
        return (d * Math.PI) / 180;
      };

      var rnd = function() {
        return Math.sin((Math.floor(Math.random() * 360) * Math.PI) / 180);
      };
      var dist = function(p1, p2, p3) {
        return Math.sqrt(
          Math.pow(p2.x - p1.x, 2) +
            Math.pow(p2.y - p1.y, 2) +
            Math.pow(p2.z - p1.z, 2)
        );
      };

      var cam = {
        obj: {
          x: _x,
          y: _y,
          z: _z
        },
        dest: {
          x: 0,
          y: 0,
          z: 1
        },
        dist: {
          x: 0,
          y: 0,
          z: 200
        },
        ang: {
          cplane: 0,
          splane: 0,
          ctheta: 0,
          stheta: 0
        },
        zoom: 1,
        disp: {
          x: w / 2,
          y: h / 2,
          z: 0
        },
        upd: function() {
          cam.dist.x = cam.dest.x - cam.obj.x;
          cam.dist.y = cam.dest.y - cam.obj.y;
          cam.dist.z = cam.dest.z - cam.obj.z;
          cam.ang.cplane =
            -cam.dist.z /
            Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);
          cam.ang.splane =
            cam.dist.x /
            Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z);
          cam.ang.ctheta =
            Math.sqrt(cam.dist.x * cam.dist.x + cam.dist.z * cam.dist.z) /
            Math.sqrt(
              cam.dist.x * cam.dist.x +
                cam.dist.y * cam.dist.y +
                cam.dist.z * cam.dist.z
            );
          cam.ang.stheta =
            -cam.dist.y /
            Math.sqrt(
              cam.dist.x * cam.dist.x +
                cam.dist.y * cam.dist.y +
                cam.dist.z * cam.dist.z
            );
        }
      };

      var trans = {
        parts: {
          sz: function(p, sz) {
            return {
              x: p.x * sz.x,
              y: p.y * sz.y,
              z: p.z * sz.z
            };
          },
          rot: {
            x: function(p, rot) {
              return {
                x: p.x,
                y: p.y * Math.cos(dtr(rot.x)) - p.z * Math.sin(dtr(rot.x)),
                z: p.y * Math.sin(dtr(rot.x)) + p.z * Math.cos(dtr(rot.x))
              };
            },
            y: function(p, rot) {
              return {
                x: p.x * Math.cos(dtr(rot.y)) + p.z * Math.sin(dtr(rot.y)),
                y: p.y,
                z: -p.x * Math.sin(dtr(rot.y)) + p.z * Math.cos(dtr(rot.y))
              };
            },
            z: function(p, rot) {
              return {
                x: p.x * Math.cos(dtr(rot.z)) - p.y * Math.sin(dtr(rot.z)),
                y: p.x * Math.sin(dtr(rot.z)) + p.y * Math.cos(dtr(rot.z)),
                z: p.z
              };
            }
          },
          pos: function(p, pos) {
            return {
              x: p.x + pos.x,
              y: p.y + pos.y,
              z: p.z + pos.z
            };
          }
        },
        pov: {
          plane: function(p) {
            return {
              x: p.x * cam.ang.cplane + p.z * cam.ang.splane,
              y: p.y,
              z: p.x * -cam.ang.splane + p.z * cam.ang.cplane
            };
          },
          theta: function(p) {
            return {
              x: p.x,
              y: p.y * cam.ang.ctheta - p.z * cam.ang.stheta,
              z: p.y * cam.ang.stheta + p.z * cam.ang.ctheta
            };
          },
          set: function(p) {
            return {
              x: p.x - cam.obj.x,
              y: p.y - cam.obj.y,
              z: p.z - cam.obj.z
            };
          }
        },
        persp: function(p) {
          return {
            x: ((p.x * cam.dist.z) / p.z) * cam.zoom,
            y: ((p.y * cam.dist.z) / p.z) * cam.zoom,
            z: p.z * cam.zoom,
            p: cam.dist.z / p.z
          };
        },
        disp: function(p, disp) {
          return {
            x: p.x + disp.x,
            y: -p.y + disp.y,
            z: p.z + disp.z,
            p: p.p
          };
        },
        steps: function(_obj_, sz, rot, pos, disp) {
          var _args = trans.parts.sz(_obj_, sz);
          _args = trans.parts.rot.x(_args, rot);
          _args = trans.parts.rot.y(_args, rot);
          _args = trans.parts.rot.z(_args, rot);
          _args = trans.parts.pos(_args, pos);
          _args = trans.pov.plane(_args);
          _args = trans.pov.theta(_args);
          _args = trans.pov.set(_args);
          _args = trans.persp(_args);
          _args = trans.disp(_args, disp);
          return _args;
        }
      };

      (function() {
        "use strict";
        var threeD = function(param) {
          this.transIn = {};
          this.transOut = {};
          this.transIn.vtx = param.vtx;
          this.transIn.sz = param.sz;
          this.transIn.rot = param.rot;
          this.transIn.pos = param.pos;
        };

        threeD.prototype.vupd = function() {
          this.transOut = trans.steps(
            this.transIn.vtx,
            this.transIn.sz,
            this.transIn.rot,
            this.transIn.pos,
            cam.disp
          );
        };

        var Build = function() {
          this.vel = 0.04;
          this.lim = 360;
          this.diff = 200;
          this.initPos = 100;
          this.toX = _x;
          this.toY = _y;
          this.go();
        };

        Build.prototype.go = function() {
          this.canvas = document.getElementById("canv");
          this.canvas.width = window.innerWidth;
          this.canvas.height = window.innerHeight;
          this.$ = canv.getContext("2d");
          this.$.globalCompositeOperation = "source-over";
          this.varr = [];
          this.dist = [];
          this.calc = [];

          for (var i = 0, len = num; i < len; i++) {
            this.add();
          }

          this.rotObj = {
            x: 0,
            y: 0,
            z: 0
          };
          this.objSz = {
            x: w / 5,
            y: h / 5,
            z: w / 5
          };
        };

        Build.prototype.add = function() {
          this.varr.push(
            new threeD({
              vtx: {
                x: rnd(),
                y: rnd(),
                z: rnd()
              },
              sz: {
                x: 0,
                y: 0,
                z: 0
              },
              rot: {
                x: 20,
                y: -20,
                z: 0
              },
              pos: {
                x: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180),
                y: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180),
                z: this.diff * Math.sin((360 * Math.random() * Math.PI) / 180)
              }
            })
          );
          this.calc.push({
            x: 360 * Math.random(),
            y: 360 * Math.random(),
            z: 360 * Math.random()
          });
        };

        Build.prototype.upd = function() {
          cam.obj.x += (this.toX - cam.obj.x) * 0.05;
          cam.obj.y += (this.toY - cam.obj.y) * 0.05;
        };

        Build.prototype.draw = function() {
          this.$.clearRect(0, 0, this.canvas.width, this.canvas.height);
          cam.upd();
          this.rotObj.x += 0.1;
          this.rotObj.y += 0.1;
          this.rotObj.z += 0.1;

          for (var i = 0; i < this.varr.length; i++) {
            for (var val in this.calc[i]) {
              if (this.calc[i].hasOwnProperty(val)) {
                this.calc[i][val] += this.vel;
                if (this.calc[i][val] > this.lim) this.calc[i][val] = 0;
              }
            }

            this.varr[i].transIn.pos = {
              x: this.diff * Math.cos((this.calc[i].x * Math.PI) / 180),
              y: this.diff * Math.sin((this.calc[i].y * Math.PI) / 180),
              z: this.diff * Math.sin((this.calc[i].z * Math.PI) / 180)
            };
            this.varr[i].transIn.rot = this.rotObj;
            this.varr[i].transIn.sz = this.objSz;
            this.varr[i].vupd();
            if (this.varr[i].transOut.p < 0) continue;
            var g = this.$.createRadialGradient(
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p,
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p * 2
            );
            this.$.globalCompositeOperation = "lighter";
            g.addColorStop(0, "hsla(255, 255%, 255%, 1)");
            g.addColorStop(0.5, "hsla(" + (i + 2) + ",85%, 40%,1)");
            g.addColorStop(1, "hsla(" + i + ",85%, 40%,.5)");
            this.$.fillStyle = g;
            this.$.beginPath();
            this.$.arc(
              this.varr[i].transOut.x,
              this.varr[i].transOut.y,
              this.varr[i].transOut.p * 2,
              0,
              Math.PI * 2,
              false
            );
            this.$.fill();
            this.$.closePath();
          }
        };
        Build.prototype.anim = function() {
          window.requestAnimationFrame = (function() {
            return (
              window.requestAnimationFrame ||
              function(callback, element) {
                window.setTimeout(callback, 1000 / 60);
              }
            );
          })();
          var anim = function() {
            this.upd();
            this.draw();
            window.requestAnimationFrame(anim);
          }.bind(this);
          window.requestAnimationFrame(anim);
        };

        Build.prototype.run = function() {
          this.anim();

          window.addEventListener(
            "mousemove",
            function(e) {
              this.toX = (e.clientX - this.canvas.width / 2) * -0.8;
              this.toY = (e.clientY - this.canvas.height / 2) * 0.8;
            }.bind(this)
          );
          window.addEventListener(
            "touchmove",
            function(e) {
              e.preventDefault();
              this.toX = (e.touches[0].clientX - this.canvas.width / 2) * -0.8;
              this.toY = (e.touches[0].clientY - this.canvas.height / 2) * 0.8;
            }.bind(this)
          );
          window.addEventListener(
            "mousedown",
            function(e) {
              for (var i = 0; i < 100; i++) {
                this.add();
              }
            }.bind(this)
          );
          window.addEventListener(
            "touchstart",
            function(e) {
              e.preventDefault();
              for (var i = 0; i < 100; i++) {
                this.add();
              }
            }.bind(this)
          );
        };
        var app = new Build();
        app.run();
      })();
      window.addEventListener(
        "resize",
        function() {
          canvas.width = w = window.innerWidth;
          canvas.height = h = window.innerHeight;
        },
        false
      );
    },
    //change,play实现表格自动滚动
    change() {
      //把第一条数据插入数组最后一条
      this.stuInfo.push(this.stuInfo[0]);
      //删除数组中第一条数据
      this.stuInfo.shift();
    },
    play() {
      //每两秒执行一次插入删除操作
      setInterval(this.change, 1000);
    },
    focusStu() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getFocusStu")
        .then(function(response) {
          var dd = [];
          var res = response.data;
          self.stuInfo = dd;
          for (var i = 0; i < res.length; i++) {
            // 判断
            if (res[i].STATUS == "隔离") {
              if (res[i].quarantine == 0) {
                res[i].quarantine = "在家";
              } else {
                res[i].quarantine = "医院";
              }
            } else {
              res[i].quarantine = "无";
            }
            if (res[i].s_name[0] != "undefined") {
              res[i].s_name = res[i].s_name[0] + "**";
            }
            dd.push({
              name: res[i].s_name,
              class: res[i].c_name,
              tem: res[i].temperature,
              status: res[i].STATUS,
              address: res[i].quarantine
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    gundong() {
      var speed = 8;
      var tab = document.getElementById("demo");
      var tab1 = document.getElementById("demo1");
      var tab2 = document.getElementById("demo2");
      tab2.innerHTML = tab1.innerHTML;
      // console.log(tab.offsetHeight);
      tab1.style.width = this.noMaskCount * tab.offsetHeight + "px";
      // console.log(this.noMaskCount)
      // console.log(this.noMaskCount*(tab.offsetHeight+3))
      function Marquee() {
        // console.log(tab2.offsetWidth)
        // console.log(tab.scrollLeft)
        if (tab2.offsetWidth - tab.scrollLeft <= 0)
          tab.scrollLeft -= tab1.offsetWidth;
        else {
          tab.scrollLeft++;
        }
      }
      var MyMar = setInterval(Marquee, speed);
      tab.onmouseover = function() {
        clearInterval(MyMar);
      };
      tab.onmouseout = function() {
        MyMar = setInterval(Marquee, speed);
      };
    },
    suzhouStu() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuInSuZhou?province=江苏")
        .then(function(response) {
          var res = response.data;
          for (var i = 0; i < res.length; i++) {
            self.Num_js.push(res[i].stuinSuZhou);
          }
          self.stuInsz();
        });
      self.$http
        .get(this.baseUrl + "/dayrpt/getStuInSuZhou?city=苏州")
        .then(function(response) {
          var res = response.data;
          for (var i = 0; i < res.length; i++) {
            self.Num_suzhou.push(res[i].stuinSuZhou);
            self.days.push(res[i].time.substring(6) + "日");
          }
          self.stuInsz();
        });
    },
    stuInsz() {
      var myChart = this.$echarts.init(document.getElementById("allLine"));
      var option = {
        tooltip: {
          //提示框组件
          trigger: "axis",
          formatter: "{b}<br />{a0}: {c0}<br />{a1}: {c1}",
          axisPointer: {
            type: "shadow",
            label: {
              backgroundColor: "#333"
            }
          },
          textStyle: {
            color: "#fff",
            fontStyle: "normal",
            fontFamily: "微软雅黑",
            fontSize: "150%"
          }
        },
        grid: {
          left: "1%",
          right: "5%",
          top: "10%",
          bottom: "1%",
          // padding: "0 0 10 0",
          containLabel: true
        },
        legend: {
          data: ["苏州人数趋势", "江苏人数趋势"],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "1%"
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true, //坐标轴两边留白
            data: this.days,
            axisLabel: {
              //坐标轴刻度标签的相关设置。
              interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
              margin: 15,
              textStyle: {
                color: "#03C5BC",
                fontStyle: "normal",
                fontFamily: "微软雅黑",
                fontSize: "150%"
              }
            },
            axisTick: {
              //坐标轴刻度相关设置。
              show: true
            },
            axisLine: {
              //坐标轴轴线相关设置
              lineStyle: {
                color: "#03C5BC"
                //	opacity:0.5
              }
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false
            }
          }
        ],
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#03C5BC"
              }
            },

            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#03C5BC"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          }
        ],
        series: [
          {
            name: "苏州人数趋势",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 1,
                      color: "rgba(127, 128, 225, 0.7)"
                    },
                    {
                      offset: 0.9,
                      color: "rgba(72, 73, 181, 0.7)"
                    },
                    {
                      offset: 0.25,
                      color: "rgba(226, 99, 74, 0.7)"
                    },
                    {
                      offset: 0,
                      color: "rgba(253, 200, 106, 0.7)"
                    }
                  ],
                  false
                )
              }
            },
            data: this.Num_suzhou
          },
          {
            name: "江苏人数趋势",
            type: "bar",
            data: this.Num_js,
            yAxisIndex: 1,
            barWidth: 10,
            barGap: 0.5, //柱间距离
            label: {
              //图形上的文本标签
              normal: {
                show: false,
                position: "top",
                textStyle: {
                  color: "#a8aab0",
                  fontStyle: "normal",
                  fontFamily: "微软雅黑",
                  fontSize: "150%"
                }
              }
            },
            itemStyle: {
              //图形样式
              normal: {
                barBorderRadius: [5, 5, 0, 0],
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 1,
                      color: "rgba(127, 128, 225, 0.7)"
                    },
                    {
                      offset: 0.9,
                      color: "rgba(72, 73, 181, 0.7)"
                    },
                    {
                      offset: 0.31,
                      color: "rgba(0, 208, 208, 0.7)"
                    },
                    {
                      offset: 0.15,
                      color: "rgba(0, 208, 208, 0.7)"
                    },
                    {
                      offset: 0,
                      color: "rgba(104, 253, 255, 0.7)"
                    }
                  ],
                  false
                )
              }
            }
          }
        ]
      };

      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    trendNum() {
      var self = this;
      self.$http
        .get(this.baseUrl + "/dayrpt/getFeverTrend")
        .then(function(response) {
          var res = response.data;
          for (var i = 0; i < res.length; i++) {
            self.Num_fashao.push(res[i].stuFeverTrend);
            self.days2.push(res[i].time.substring(6) + "日");
          }
          console.log(self.Num_fashao);
          self.totalNum();
        });

      self.$http
        .get(this.baseUrl + "/dayrpt/getStuIsolated")
        .then(function(response) {
          var res = response.data;
          for (var i = 0; i < res.length; i++) {
            self.Num_geli.push(res[i].stuFeverTrend);
          }
          self.totalNum();
        });
    },
    totalNum() {
      var myChart = this.$echarts.init(document.getElementById("allNum"));
      // Generate data
      var option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          }
        },
        legend: {
          data: ["隔离人数趋势", "发烧人数趋势"],
          textStyle: {
            color: "#B4B4B4"
          },
          top: "1%"
        },
        grid: {
          left: "10%",
          right: "5%",
          top: "10%",
          bottom: "1%",
          containLabel: true
        },
        xAxis: {
          data: this.days2,
          axisLine: {
            lineStyle: {
              color: "#03C5BC"
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#03C5BC"
              }
            },

            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#03C5BC"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          }
        ],
        series: [
          {
            name: "隔离人数趋势",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#F02FC2"
              }
            },
            data: this.Num_geli
          },

          {
            name: "发烧人数趋势",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#956FD4" },
                  { offset: 1, color: "#3EACE5" }
                ])
              }
            },
            data: this.Num_fashao
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
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

<style lang="less">
.myvideo {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
  width: 40%;
  font-size: 0.15rem;
  text-align: center;
  border: 1px solid rgba(25, 186, 139, 0.17);
  // box-shadow: 0px 0px 10px rgba(25, 140, 186, 0.6) inset;
  background: rgba(255, 255, 255, 0.08) url("../assets/images/line.png");
}

.ivu-tabs-tabpane {
  width: 100%;
  height: 100%;
}
.ivu-tabs-content {
  height: calc(87% - 15px);
}
.ivu-tabs {
  height: 100%;
}
#resou {
  width: 100%;
  height: 100%;
}
#zhishi {
  width: 100%;
  height: 100%;
}
.el-table__header {
  padding: 0;
  height: 5%;
}
.el-table__body,
.el-table__footer,
.el-table__header {
  table-layout: fixed;
  border-collapse: separate;
  width: auto !important;
}
#demo {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

#demo img {
  height: 100%;
  margin-right: 3px;
}

#indemo {
  float: left;
  width: 800%;
  height: 100%;
}

#demo1 {
  float: left;
  height: 100%;
}

#demo2 {
  float: left;

  height: 100%;
}
.piyao {
  height: 80%;
  width: 100%;
  overflow-y: hidden;
}
.piyao:hover {
  overflow-y: scroll;
}
.piyao ul {
  height: 100%;
  width: 100%;
}
.piyao_list {
  height: calc(100% / 8);
  width: 100%;
  padding-left: 2rem;
  font-size: 0.18rem;
  color: azure;
  // border: 1px solid rgba(25, 186, 139, 0.17);
  // border-radius: 5px;
  // background: rgba(255, 255, 255, 0.08) url("../assets/images/line.png");
  // box-shadow: 0px 0px 5px rgba(25, 108, 186, 0.6) inset;
  margin-bottom: 0.1rem;
  padding-top: 0.15rem;
  // list-style-position: inside;
  // list-style-image: url("../assets/images/icon_1.png");
}

#fashao {
  width: 80%;
  margin: 0 auto;
  height: 0.75rem;
}
.el-dropdown-link {
  cursor: pointer;
  color: #1bb4f6;
  font-size: 0.15rem;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.select {
  width: 34%;
  float: left;
  height: 100%;
}

// .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-nav-container {
//   height: 0.4rem;
// }
// .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
//   height: 0.4rem;
// }
.el-table {
  height: inherit;
  width: 100% !important;
  background-color: transparent !important;
  color: #00d4c7 !important;
  font-size: 150% !important;
}

.el-table thead {
  color: #dcdcdc !important;
  background-color: #225e7e;
  // font-weight: 500;
}
/* 设置table header的背景颜色 */
.el-table th,
.el-table tr,
.el-table td {
  background-color: transparent !important;
  padding: 4px 0 !important;
  text-align: center !important;
}

.el-table td,
.el-table th.is-leaf {
  border-bottom: 0px solid #05a4b8 !important;
}

.el-table--border,
.el-table--group {
  border: 1px solid #05a4b8 !important;
}

.el-table::after {
  width: 0% !important;
  height: 0% !important;
}
.el-table::before {
  width: 0% !important;
  height: 0% !important;
}
.el-table .cell {
  line-height: 100% !important;
  padding-left: 0 !important;
}
#allNum {
  width: 5.5rem;
  height: 2.5rem;
  position: absolute;
}
#allLine {
  height: 2.5rem;
  width: 5rem;
  margin-left: 6rem;
  position: absolute;
}
.el-tabs__item {
  font-size: 180%;
  color: transparent;
}
.el-tabs__item.is-active {
  color: #00d4c7;
}
.el-tabs__content {
  overflow: hidden;
  position: relative;
  width: 75%;
  height: 100%;
}
.ivu-tabs-bar {
  margin-bottom: 0;
  border-bottom: 1px solid #00d4c7;
  // width: 5.1rem;
}
.ivu-tabs-nav {
  padding-left: 2rem;
}
.ivu-tabs-nav-container:focus .ivu-tabs-tab-focused {
  border-color: #00d4c7 !important;
}
.ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
  color: #00d4c7;
}
</style>
