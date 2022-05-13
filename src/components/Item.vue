<template>
	<div class="item">
		<p>{{ nombre }}</p>
		<b-img class="imagen-a" :src="imagen" alt="Image" thumbnail></b-img>
		<p>${{ precio }}</p>
		<div class="checkout">
			<b-button
				@click="accionAgregar({nombre, precio, imagen})"
				variant="primary"
				v-b-tooltip.hover
				title="Añadir a Carrito"
				v-if="!checkout"
			>
				<b-icon icon="cart-plus"></b-icon>
			</b-button>
			<b-button
				@click="accionComprar({ nombre, precio, imagen })"
				variant="success"
				v-b-tooltip.hover
				title="Comprar"
				v-if="!checkout"
			>
				<b-icon icon="cart-check"></b-icon>
			</b-button>
		</div>
	</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
	name: 'ItemVue',
	// data() {
	// 	return {
	// 		nombre,
	// 		cantidad,
	// 	};
	// },
	props: {
		nombre: String,
		precio: Number,
		imagen: String,
		productos: Array,
		checkout: Boolean,
	},
	methods:{
		...mapActions(['accionAgregar', 'accionComprar'])
	}
};
</script>

<style scoped>
.item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 250px;
	margin-top: 10px;
	border: solid 1px;
	padding: 20px;
	border-radius: 20px;
}

.imagen-a {
	width: 110px;
	height: 110px;
	object-fit: contain;
}

.checkout {
	display: flex;
	gap: 5px;
}
</style>
