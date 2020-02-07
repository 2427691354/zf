// 状态值的改变方法,操作状态值
// 提交mutations是更改Vuex状态的唯一方法
export const INITIALIZE_DATA = state => {
    state.itemNum = 1;
    state.fatherComponent = 'outcome';
  }
  export const ADD_ITEM = state => {
    state.itemNum += 1
  }
  export const START_ANSWER = state => {
    state.fatherComponent = 'answer';
    state.answerid = [];
  }
   
  export const REMBER_ANSWER = (state , id) => {
    state.answerid.push(id);
  }
  