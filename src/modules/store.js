import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },

  getters: {
    count(state) {
      return state.count
    }
  },

  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store