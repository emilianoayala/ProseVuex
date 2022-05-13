<template>
	<div class="item">
		<b-img class="imagen-a" :src="imagen" alt="Image"></b-img>
		<h3>{{ nombre }}</h3>
		<h3>${{ precio }}</h3>
		<div class="checkout">
			<b-button
				class="itemButton"
				@click="accionAgregar({ nombre, precio, imagen })"
				variant="primary"
				v-b-tooltip.hover
				title="Añadir a Carrito"
				v-if="!checkout"
			>
				<b-icon class="carrito-icon" icon="cart-plus"></b-icon>
			</b-button>
			<b-button
				class="itemButton"
				@click="accionComprar({ nombre, precio, imagen })"
				variant="success"
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
	justify-content: space-around;
	align-items: center;
	width: 350px;
	height: 500px;
	margin-top: 10px;
	border: solid 1px;
	border-radius: 15px;
}

.imagen-a {
	width: 90%;
	height: 60%;
	object-fit: contain;
}

.checkout {
	display: flex;
	gap: 5px;
}

.itemButton {
	height: 60px;
	width: 60px;
}

.carrito-icon {
	font-size: 30px !important;
}

</style>
