import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		productos: [],
		user: null,
	},
	getters: {
		usuarioAutenticado(state) {
			return !!state.user;
		},
	},
	mutations: {
		agregarCarritox(state, payload) {
			state.productos = [...state.productos, payload];
			localStorage.setItem(
				'productos-vue',
				JSON.stringify(state.productos)
			);
		},
		comprarx(state, objetox) {
			state.productos = [objetox];
			localStorage.setItem(
				'productos-vue',
				JSON.stringify(state.productos)
			);
			router.push({ name: 'checkout' });
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

			localStorage.setItem(
				'productos-vue',
				JSON.stringify(state.productos)
			);
		},
		montarCarrito(state, payload) {
			state.productos = payload;
		},
		setUser(state, payload) {
			//Registrar usuario
			state.user = payload;
		},
	},
	actions: {
		accionAgregar({ commit }, { nombre, precio, imagen }) {
			commit('agregarCarritox', { nombre, precio, imagen });
		},
		accionComprar({ commit }, { nombre, precio, imagen }) {
			commit('comprarx', { nombre, precio, imagen });
		},
		accionVaciar({ commit }) {
			commit('vaciarCarritox');
		},
		accionEliminar({ commit }, index) {
			commit('eliminarDeCarrito', index);
		},
		accionMontarCarrito({ commit }) {
			if (localStorage.getItem('productos-vue')) {
				const productos = JSON.parse(
					localStorage.getItem('productos-vue')
				);
				commit('montarCarrito', productos);
				return;
			}

			localStorage.setItem('productos', JSON.stringify([]));
		},
		async registrarUsuario({ commit }, usuario) {
			try {
				const res = await fetch(
					'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCENvHZrXca5GlN-YEJR7VbR-_svYkEp88',
					{
						method: 'POST',
						body: JSON.stringify({
							email: usuario.email,
							password: usuario.password,
							returnSecureToken: true,
						}),
					}
				);
				const userDB = await res.json();
				console.log(userDB);
				if (userDB.error) {
					console.log(userDB.error);
					return;
				}
				commit('setUser', userDB);
				router.push('/');
				localStorage.setItem('usuario', JSON.stringify(userDB));
			} catch (error) {
				console.log(error);
			}
		},
		async loginUsuario({ commit }, usuario) {
			console.log(usuario);
			try {
				const res = await fetch(
					'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCENvHZrXca5GlN-YEJR7VbR-_svYkEp88',
					{
						method: 'POST',
						body: JSON.stringify({
							email: usuario.email,
							password: usuario.password,
							returnSecureToken: true,
						}),
					}
				);
				const userDB = await res.json();
				console.log(userDB);
				if (userDB.error) {
					return console.log(userDB.error);
				}
				commit('setUser', userDB);
				router.push('/products');
				localStorage.setItem('usuario', JSON.stringify(userDB));
			} catch (error) {
				console.log(error);
			}
		},
		cerrarSesion({ commit }) {
			commit('setUser', null);
			router.push('/login');
			localStorage.removeItem('usuario');
		},
		cargarLocalStorage({ commit, state }) {
			if (localStorage.getItem('usuario')) {
				commit('setUser', JSON.parse(localStorage.getItem('usuario')));
			} else {
				return commit('setUser', null);
			}
		},
	},
	modules: {},
});
