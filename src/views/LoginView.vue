<template>
    <div>
        <h1>LOGIN</h1>
        <div class="div-login">
            <form @submit.prevent="procesarFormulario">
                <input
                    type="email"
                    placeholder="ingrese su e-mail"
                    class="form-control my-2"
                    v-model.trim="email"
                />
                <input
                    type="password"
                    placeholder="password"
                    class="form-control my-2"
                    v-model.trim="pass1"
                />
                <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="bloquear"
                >
                    Ingresar
                </button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            email: "",
            pass1: "",
        };
    },
    computed: {
        bloquear() {
            if (!this.email.includes("@")) {
                return true; //  Si email NO incluye un @ regresa true (bloqueado)
            }
            if (this.pass1.length > 5) {
                return false; // Si pass1 tiene mas de 5 chars regresa FALSE(desbloqueado)
            }
            return true;
        },
    },
     methods: {
            ...mapActions(['loginUsuario']),
            limpiarFormulario(){
                this.email = '',
                this.pass1 = ''
            },
            procesarFormulario(){
                this.loginUsuario({email: this.email, password: this.pass1})
                this.limpiarFormulario()
            }
        }
};
</script>

<style>
</style>