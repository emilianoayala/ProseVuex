<template>
	<div class="container">
		<div v-if="productos.length === 1">
			<h3>CHECKOUT</h3>
			<Item
				class="item"
				v-for="(item, index) in productos"
				:key="index"
				:imagen="item.imagen"
				:nombre="item.nombre"
				:precio="item.precio"
				:checkout="true"
			/>

			<b-button class="boton" variant="success"
				>Continuar compra</b-button
			>
		</div>

		<div v-else-if="productos != 0">
			<h3>CHECKOUT</h3>
			<h3 v-for="(item, index) in productos" :key="index">
				{{ item.nombre }}
				${{ item.precio }}
			</h3>

			<b-button class="boton" variant="success"
				>Continuar compra</b-button
			>
		</div>

		<h1 v-else>No hay items</h1>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Item from '../components/Item.vue';

export default {
	name: 'Checkout',

	components: {
		Item,
	},
	computed: {
		...mapState(['productos']),
	},
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border: 1px solid green;
	padding: 10px;
	height: fit-content;
	width: fit-content;
}

.item {
	height: 300px;
	width: 250px;
	border: none !important;
}
</style>
