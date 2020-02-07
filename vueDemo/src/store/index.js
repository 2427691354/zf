import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
 
Vue.use(Vuex)
// 首先声明一个状态 state
const state = {
  itemNum: 1,
  fatherComponent:'home',
  answerid: [], //答案id
  itemDetail: [{
    "topic_id": 20,
    "active_topic_id": 4,
    "type": "ONE",
    "topic_num": "题目一",
    "topic_name": "1.沼泽地被成为地球的什么?(C)",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 1,
      "topic_id": 20,
      "answer_name": "肺",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 2,
      "topic_id": 20,
      "answer_name": "心脏",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 3,
      "topic_id": 20,
      "answer_name": "肾",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 4,
      "topic_id": 20,
      "answer_name": "眼睛",
      "is_standard_answer": 1
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_num": "题目二",
    "topic_name": "2.每年的什么时候是森林日?(B)",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 5,
      "topic_id": 21,
      "answer_name": "3月25日",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 6,
      "topic_id": 21,
      "answer_name": "3月21日",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 7,
      "topic_id": 21,
      "answer_name": "5月12日",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 8,
      "topic_id": 21,
      "answer_name": "2月11日",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_num": "题目三",
    "topic_name": "3.下列哪个不是属于湿地?(D)",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 9,
      "topic_id": 21,
      "answer_name": "沼泽地",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 10,
      "topic_id": 21,
      "answer_name": "泥炭地",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 11,
      "topic_id": 21,
      "answer_name": "盐沼",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 12,
      "topic_id": 21,
      "answer_name": "池塘",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_num": "题目四",
    "topic_name": "4.下列哪个选项不属于全球三大生态系统?(B)",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 13,
      "topic_id": 21,
      "answer_name": "湿地",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 14,
      "topic_id": 21,
      "answer_name": "河流",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 15,
      "topic_id": 21,
      "answer_name": "森林",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 16,
      "topic_id": 21,
      "answer_name": "海洋",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_num": "题目五",
    "topic_name": "5.下列含什么的物质会破坏臭氧层?（C）",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 17,
      "topic_id": 21,
      "answer_name": "铁、锌",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 18,
      "topic_id": 21,
      "answer_name": "氢、氧",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 19,
      "topic_id": 21,
      "answer_name": "氯、溴",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 20,
      "topic_id": 21,
      "answer_name": "氟",
      "is_standard_answer": 0
    }]
  }],
}
// 下面这个相当关键了，所有模块，记住是所有，注册才能使用
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
export default store
