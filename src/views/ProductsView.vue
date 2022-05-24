<template>
	<div class="containerPrincipal">
		<div class="carrito">
			<div class="titulo">
				<h1>Productos</h1>
			</div>
		</div>

		<div class="products">
			<div
				v-for="({ nombre, precio, imagen }, index) in items"
				:key="index"
			>
				<ItemVue
					:nombre="nombre"
					:precio="precio"
					:imagen="imagen"
					@accionAgregar="accionAgregar"
					@accionComprar="accionComprar"
				></ItemVue>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import ItemVue from '../components/Item.vue';
import items from '../components/Mouses';

export default {
	name: 'Products',
	data() {
		return {
			items,
		};
	},
	components: { ItemVue },
	computed: {
		...mapState(['productos'])
	},
	methods: {
		...mapActions(['accionAgregar', 'accionComprar']),
		// agregarCarrito({ nombre, precio, imagen }) {
		// 	this.productos = [...this.productos, { nombre, precio, imagen }];
		// 	localStorage.setItem(
		// 		'productos-vue',
		// 		JSON.stringify(this.productos)
		// 	); //Agrego el array "Productos" al local storage
		

		// comprar({ nombre, precio, imagen }) {
		// 	this.productos = [{ nombre, precio, imagen }];
		// 	this.$router.push('/checkout');
		// 	localStorage.setItem(
		// 		'productos-vue',
		// 		JSON.stringify(this.productos)
		// 	);
		// },
	},
	// mounted() {
	// 	let datosDB = JSON.parse(localStorage.getItem('productos-vue')); // Antes de montar la app creo una variable en el local storage
	// 	if (datosDB === null) {
	// 		this.productos = []; // Si no hay datos, el array queda vacío
	// 	} else {
	// 		this.productos = datosDB; // Sino, trae los datos existentes
	// 	}
	// },
};
</script>

<style scoped>
h1 {
	text-decoration: underline;
}
.products {
	display: flex;
	max-width: 1600px;
	flex-wrap: wrap;
	align-items: center;
	gap: 30px;
	margin-top: 20px;
	border-radius: 10px;
	justify-content: center;
	margin-bottom: 50px;
}

.containerPrincipal {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.carrito {
	display: flex;
}

.titulo {
	display: flex;
}
</style>
