import { createStore } from 'vuex'

export default createStore({
  state(){
    return{
      theme: localStorage.getItem("dark") === "true",
    }
  },
  getters: {
  },
  mutations: {
    changetheme(state) {
      state.theme = !state.theme;
      localStorage.setItem("dark", state.theme);
    },
  },
  actions: {
  },
  modules: {
  }
})
