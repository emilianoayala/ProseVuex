<template>
	<div class="container">
		<h2>CHECKOUT</h2>
		<div class="checkout" v-if="productos.length <= 1">
			<Item
				class="checkout"
				v-for="(item, index) in productos"
				:key="index"
				:imagen="item.imagen"
				:nombre="item.nombre"
				:precio="item.precio"
				:checkout="true"
			/>
		</div>

		<h1 v-else>
			<h3 v-for="(item, index) in productos" :key="index">
				{{ item.nombre }}
				${{ item.precio }}
			</h3>
		</h1>
		<b-button class="boton" variant="success">Continuar compra</b-button>
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
	height: fit-content;
	width: fit-content;
	gap: 15px;
	padding: 10px;
}

.checkout {
	height: 330px;
	width: 300px;
}
</style>
