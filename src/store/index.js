import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
  },
  getters: {},
  mutations: {
    agregarCarritox(state, payload) {
      state.productos = [...state.productos, payload];
      localStorage.setItem("productos-vue", JSON.stringify(state.productos));
    },
    comprarx(state, objetox) {
      state.productos = [objetox];
      localStorage.setItem("productos-vue", JSON.stringify(state.productos));
      router.push({ name: "checkout" });
    },
    vaciarCarritox(state) {
      state.productos = [];
      localStorage.clear();
    },
    eliminarDeCarrito(state, index) {
      if (state.productos.length === 0) return;

      state.productos = state.productos.filter(
        (producto, productIndex) => index !== productIndex
      );

      localStorage.setItem("productos-vue", JSON.stringify(state.productos));
    },
    montarCarrito(state){
      if (localStorage.getItem('productos-vue')) {
        state.productos = JSON.parse(localStorage.getItem('productos-vue')); // Antes de montar la app creo una variable en el local storage
        // console.log(this.productos);
      }
    }
  },
  actions: {
    accionAgregar({ commit }, { nombre, precio, imagen }) {
      commit("agregarCarritox", { nombre, precio, imagen });
    },
    accionComprar({ commit }, { nombre, precio, imagen }) {
      commit("comprarx", { nombre, precio, imagen });
    },
    accionVaciar({ commit }) {
      commit("vaciarCarritox");
    },
    accionEliminar({ commit }, index) {
      commit("eliminarDeCarrito", index);
    },
    accionMontarCarrito({commit}){
      commit("montarCarrito")
    }
  },
  modules: {},
});
