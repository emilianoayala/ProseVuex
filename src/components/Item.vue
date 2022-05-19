<template>
	<div class="item">
		<b-img class="imagen-a" :src="imagen" alt="Image"></b-img>
		<h3>{{ nombre }}</h3>
		<h4>${{ precio }}</h4>
		<div class="checkout">
			<b-button
				class="addButton"
				@click="accionAgregar({ nombre, precio, imagen })"
				v-b-tooltip.hover
				title="Añadir a Carrito"
				v-if="!checkout"
			>
				<b-icon class="carrito-icon" icon="cart-plus"></b-icon>
			</b-button>
			<b-button
				class="buyButton"
				@click="accionComprar({ nombre, precio, imagen })"
				v-b-tooltip.hover
				title="Comprar"
				v-if="!checkout"
			>
				<b-icon class="carrito-icon" icon="cart-check"></b-icon>
			</b-button>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
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
	methods: {
		...mapActions(['accionAgregar', 'accionComprar']),
	},
};
</script>

<style scoped>
.item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 450px;
	padding: 10px;
	border: solid 1px;
	border-radius: 10px;
}

.imagen-a {
	width: 90%;
	height: 65%;
	object-fit: contain;
}

.checkout {
	display: flex;
	gap: 5px;
}

.buyButton {
	height: 45px;
	width: 50px;
	background: #42b983;
	border: none;
}

.addButton {
	height: 45px;
	width: 50px;
	background: #4283b9;
	border: none;
}

.carrito-icon {
	font-size: 25px !important;
}
</style>
