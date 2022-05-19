<template>
	<div
		class="carrito"
		v-b-modal.carrito-mod
		v-b-tooltip.hover.righttop
		title="Click para ver mi carrito"
	>
		<b-icon class="carrito-icon" icon="cart"></b-icon>
		<h4>:</h4>
		<h4>{{ $store.state.productos.length }}</h4>

		<b-modal id="carrito-mod" title="Mi Carrito" scrollable>
			<div class="my-modal" v-if="$store.state.productos.length > 0">
				<div class="titulo">
					Cantidad de productos: {{ $store.state.productos.length }}

					<b-button
						class="emptyButton"
						@click="accionVaciar"
						v-b-tooltip.hover
						title="Vaciar carrito"
						>☒</b-button
					>
				</div>

				<ol class="data">
					<li
						v-for="({ nombre, precio, imagen }, index) in productos"
						:key="index"
					>
						<div v-if="contar(nombre) > 1">
							<img
								class="imagen-a"
								:src="imagen"
								alt="Image"
								thumbnail
							/>
							{{ contar(nombre) }} * {{ nombre }} = ${{
								precio * contar(nombre)
							}}
						</div>
						<div class="item" v-else>
							<img
								class="imagen-a"
								:src="imagen"
								alt="Image"
								thumbnail
							/>
							<p>{{ nombre }} = ${{ precio }}</p>
						</div>

						<b-button
							class="deleteButton"
							@click="accionEliminar(index)"
						>
							<b-icon icon="cart-x-fill"></b-icon>
						</b-button>
					</li>
				</ol>
				<p>
					Total ${{
						productos.reduce(
							(total, producto) => total + producto.precio,
							0
						)
					}}
				</p>
			</div>
			<p v-else>Carrito vacío</p>
		</b-modal>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'carrito',
	// data() {
	// 	return {
	// 		productosLocal: localStorage.getItem('productos-vue')
	// 			? localStorage.getItem('productos-vue')
	// 			: [],
	// 	};
	// },
	// props: {
	// 	nombre: String,
	// 	precio: Number,
	// 	imagen: String,
	// 	// productos: {
	// 	// 	type: Array,
	// 	// 	default: [],
	// 	// },
	// },
	computed: {
		...mapState(['productos']),
	},
	methods: {
		...mapActions([
			'accionVaciar',
			'accionEliminar',
			'accionMontarCarrito',
		]),
		contar(nombre) {
			const nombresProductos = this.productos.map(
				(producto) => producto.nombre
			);

			const filtrado = nombresProductos.filter(
				(producto) => producto === nombre
			);

			return filtrado.length;
		},
	},
	// 	eliminarCarrito(index) {
	// 		if (this.productos.length === 0) return;

	// 		this.productos = this.productos.filter(
	// 			(producto, productIndex) => index !== productIndex
	// 		);
	// 		localStorage.setItem(
	// 			'productos-vue',
	// 			JSON.stringify(this.productos)
	// 		); //Agrego el array "Productos" al local storage
	// 	},
	// 	vaciarCarrito() {
	// 		this.productos = [];
	// 		localStorage.clear();
	// 	},
	// },
	mounted() {
		this.accionMontarCarrito();
	},

	// created() {
	// 	this.accionMontarCarrito();
	// },
};
</script>

<style scoped>
.carrito-icon {
	font-size: 22px;
}

.carrito {
	display: flex !important;
	align-items: stretch !important;
	color: white;
	background: #19c58c;
	padding: 5px;
	border-radius: 3px;
	height: 40px;
	gap: 5px;
}

li {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.precio-producto {
	margin-left: 10px;
	margin-right: 30px;
	text-decoration: underline;
}

.my-modal {
	display: flex;
	flex-direction: column;
	align-items: stretch;
	padding: 15px;
}

.titulo {
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	align-items: baseline;
}

.imagen-a {
	width: 40px;
	height: 40px;
}

.item {
	display: flex;
	gap: 5px;
	margin-bottom: 15px;
}

.data {
	display: flex;
	flex-direction: column;
}

.deleteButton {
	background: #e6490b;
	border: none;
}

.emptyButton {
	background: #e6490b;
	border: none;
}
</style>
