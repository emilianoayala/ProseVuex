<template>
    <div class="div-registro">
        <h1>REGISTRO DE USUARIO</h1>
        <form @submit.prevent="procesarFormulario">
            <input
                type="email"
                placeholder="ingrese su e-mail"
                class="form-control my-2"
                v-model.trim="email"
            />
            <input
                type="password"
                placeholder="Elija una contraseña (más de 6 caracteres)"
                class="form-control my-2"
                v-model.trim="pass1"
            />
            <input
                type="password"
                placeholder="Confirme su contraseña"
                class="form-control my-2"
                v-model.trim="pass2"
            />
            <button type="submit" class="btn btn-primary" :disabled="bloquear">
                Ingresar
            </button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            email: "",
            pass1: "",
            pass2: "",
        };
    },
    computed: {
        bloquear() {
            if (!this.email.includes("@")) {
                return true; //  Si email NO incluye un @ regresa true (bloqueado)
            }
            if (this.pass1.length > 5 && this.pass1 === this.pass2) {
                return false; // Si pass1 tiene mas de 5 chars Y TMB es igual a pass2 regresa FALSE(desbloqueado)
            }
            return true;
        },
    },
    methods: {
        ...mapActions(['registrarUsuario']),
        limpiarFormulario(){
                this.email = '',
                this.pass1 = '',
                this.pass2 = ''
            },
            procesarFormulario(){
                this.registrarUsuario({email: this.email, password: this.pass1})
                this.limpiarFormulario()
            }
    }
};
</script>

<style>
</style>