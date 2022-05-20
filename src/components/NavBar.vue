<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/products">Products</router-link> |
		<router-link to="/admin">Administracion</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/checkout">Checkout</router-link>
		<slot name="shopping-cart"></slot>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
};
</script>

<style></style>
