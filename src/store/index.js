import Vue from "vue";
import Vuex from "vuex";
import todos from "@/store/modules/todo.js";
import auths from "@/store/modules/auths.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todos,
    auths
  }
});

export default store
