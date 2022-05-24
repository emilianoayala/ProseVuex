<template>
	<div class="item">
		<div class="item-imagen">
			<img class="imagen-a" :src="imagen" alt="Image" />
			<button class="ver-mas">ver más</button>
		</div>

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
	padding: 15px;
	border: solid 1px;
	border-radius: 10px;
	box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
	-moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.3);
}

.item-imagen {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 250px;
	height: 280px;
}

.imagen-a {
	display: block;
	width: 100%;
	height: 100%;
	object-fit: contain;
	transition: 0.5s ease;
}

.item:hover .imagen-a {
	opacity: 0.5;
	background: white;
	-webkit-transition: all ease-in-out 0s;
	-o-transition: all ease-in-out 0s;
	transition: all ease-in-out 0s;
}

.item:hover .item-imagen {
	opacity: 1;
	background: rgb(61, 60, 60);
	-webkit-transition: all ease-in-out 0.3s;
	-o-transition: all ease-in-out 0.3s;
	transition: all ease-in-out 0.3s;
}

.item:hover .ver-mas {
	opacity: 1;
}

.ver-mas:hover{
	opacity: 1;
	background-color: #42b983;
	border: 2px solid #fff !important;
}

.item-imagen:hover .ver-mas:hover{
	-webkit-transition: all ease-in-out 0.1s;
	transition: all ease-in-out 0.1s;
}

.ver-mas {
	opacity: 0;
	-webkit-transition: all ease-in-out 0.5s;
	transition: all ease-in-out 0.5s;
	display: block;
	background-color: #4283b9;
	padding: 5px 10px;
	border: none;
	position: absolute;
	text-transform: uppercase;
	font-weight: 600;
	color: #fff;
	border-radius: 3px;
	width: 140px;
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
