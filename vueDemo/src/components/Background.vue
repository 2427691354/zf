<template>
  <div class="mainbody">
    <div v-if="fatherComponent == 'home'">
      <div class="item_list_container">
        <div class="home_logo"></div>
        <span class="start_item button_style" @click="startAnswer"></span>
      </div>
    </div>

    <div v-if="fatherComponent == 'answer'">
      <div class="item_list_container" v-if="itemDetail.length > 0">
        <span class="num_tip">{{itemDetail[itemNum-1].topic_num}}</span>
        <span class="name_tip">{{itemDetail[itemNum-1].topic_name}}</span>
        <ul>
          <li
            v-for="(item, index) in itemDetail[itemNum-1].topic_answer"
            @click="choosed(index, item.topic_answer_id)"
            class="item_list"
          >
            <span
              class="option_detail"
              v-bind:class="{'has_choosed':choosedNum==index}"
            >{{item.answer_name}}</span>
          </li>
        </ul>
        <span class="next_item button_style" @click="nextItem" v-if="itemNum < itemDetail.length"></span>
        <span class="submit_item button_style" v-else @click="submitAnswer"></span>
      </div>
    </div>

    <div v-if="fatherComponent == 'outcome'">
      <div class="item_list_container">
        <div class="outcome_style">
          <span class="show_outcome">
            <div class="text">得分 ： {{score}}</div>
          </span>
        </div>
      </div>
    </div>

    <div class="testArea">
      <!-- <span v-for="value in answerid">{{value}}, </span> -->
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Background",
  data() {
    return {
      itemId: null, //题目ID
      choosedNum: null, //选中答案索引
      choosedId: null, //选中答案id
      score: 0, //分数
      rightAnswer: [3, 6, 12, 14, 19] //正确答案
    };
  },
  computed: mapGetters([
    //与vuex中的getters关联
    "itemNum",
    "fatherComponent",
    "itemDetail",
    "answerid"
  ]),

  methods: {
    ...mapActions([
      //与vuex中的actions关联
      "initializeData",
      "startAnswer",
      "addNum"
    ]),
    //点击下一题
    nextItem() {
      if (this.choosedNum !== null) {
        this.choosedNum = null;
        //保存答案, 题目索引加一，跳到下一题
        this.addNum(this.choosedId);
      } else {
        alert("您还没有选择答案哦");
      }
    },
    //选中的答案信息
    choosed(type, id) {
      this.choosedNum = type;
      this.choosedId = id;
    },
    //到达最后一题，交卷，跳转分数页面
    submitAnswer() {
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId);
        this.answerid.forEach((item, index) => {
          if (item == this.rightAnswer[index]) {
            this.score += 20;
          }
        });
        this.initializeData();
      } else {
        alert("您还没有选择答案哦");
      }
    }
  }
};
</script>
<style scoped>
.mainbody {
  width: 100%;
  height: 100%;
}
.home_logo {
  background-image: url(../images/1-2.png);
  background-size: 100% 100%;
  height: 200px;
  width: 500px;
  margin:20px auto;
}
.item_list_container{
  text-align: center;
}
.item_list_container ul{
  width: 300px;
  
  margin:20px auto;
  text-align: left;
}
.button_style {
  display: block;
  height: 2.1rem;
  width: 4.35rem;
  background-size: 100% 100%;
  position: absolute;
  top: 16.5rem;
  left: 50%;
  margin-left: -2.4rem;
  background-repeat: no-repeat;
}
.start_item {
  background-image: url(../images/1-4.png);
}
.next_item {
  background-image: url(../images/2-2.png);
}
.submit_item {
  background-image: url(../images/3-1.png);
}
.show_outcome {
  display: block;
  width: 300px;
  height: 200px;
  background-image: url(../images/4-2.png);
  background-size: 100% 100%;
  text-align: center;
  margin: 0 auto;
}
.show_outcome .text {
  padding-top: 130px;
  font-size: 20px;
  font-weight: 500;
}

</style>