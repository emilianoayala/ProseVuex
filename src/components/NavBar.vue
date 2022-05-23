<template>
    <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand to="/" >Home</b-navbar-brand>
        <div class="d-flex">
            <router-link to="/products" class="btn btn-dark" v-if="usuarioAutenticado"
                >Products</router-link
            >
            |
            <router-link to="/admin" class="btn btn-dark" v-if="usuarioAutenticado"
                >Administracion</router-link
            >
            |
            <router-link to="/about" class="btn btn-dark" v-if="usuarioAutenticado">About</router-link>
            |
            <router-link to="/checkout" class="btn btn-dark" v-if="usuarioAutenticado"
                >Checkout</router-link
            >
            <router-link to="/login" class="btn btn-dark" v-if="!usuarioAutenticado">Login</router-link>
            <router-link to="/registro" class="btn btn-dark" v-if="!usuarioAutenticado"
                >Registro</router-link
            >
            <slot name="shopping-cart" v-if="usuarioAutenticado"></slot>
			<button v-if="usuarioAutenticado" class="btn btn-sm btn-dark" @click="cerrarSesion">{{user.email}} <br> Cerrar sesión</button>
        </div>
    </b-navbar>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
    name: "NavBar",
    computed: {
        ...mapGetters(["usuarioAutenticado"]),
		...mapState(['user']),
    },
    methods: {
        ...mapActions(["cerrarSesion"]),
    },
};
</script>

<style scoped>
.navbar {
    width: 100%;
    justify-content: space-between;
}
</style>
