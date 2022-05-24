<template>
	<div id="app">
		<nav-bar>
			<template #shopping-cart>
				<Carrito />
			</template>
		</nav-bar>
		<router-view />
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import NavBar from '../src/components/NavBar.vue';
import Carrito from '../src/components/Carrito.vue';

export default {
	components: {
		NavBar,
		Carrito,
	},
	methods: {
		...mapActions(['cargarLocalStorage']),
	},
	created() {
		this.cargarLocalStorage();
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
	align-items: center;
}

nav {
	padding: 30px;
	display: flex;
	justify-content: center;
	align-items: center !important;
	gap: 15px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
