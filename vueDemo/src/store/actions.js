//actions 注册事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
//初始化信息
export const initializeData=({ commit }) => commit('INITIALIZE_DATA')
//开始页面
export const startAnswer=({ commit }) => commit('START_ANSWER')
 
export const addNum=({ commit, state }, id) => {
    //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    commit('REMBER_ANSWER', id);
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEM');
    }
  }
