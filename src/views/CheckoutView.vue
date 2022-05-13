<template>
	<div class="container">
		<h1>CHECKOUT</h1>
		<div v-if="productos.length <= 1">
			<Item
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
		<b-button variant="success">Continuar compra</b-button>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import Item from '../components/Item.vue';

export default {
	name: 'Checkout',
	
	components: {
		Item,
	},
	computed: {
		...mapState(['productos'])
	}
	
	// mounted() {
	// 	this.objects = JSON.parse(localStorage.getItem('productos-vue')); // Antes de montar la app creo una variable en el local storage
	// },
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	border: 1px solid green;
	height: 380px;
	width: 340px;
	gap: 10px;
	padding: 10px;
}
</style>