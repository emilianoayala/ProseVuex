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
import NavBar from '../src/components/NavBar.vue';
import Carrito from '../src/components/Carrito.vue';

export default {
	components: {
		NavBar,
		Carrito,
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
	align-items: baseline;
	gap: 17px;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #42b983;
}
</style>
