import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "../store";
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import AdministracionView from '../views/AdministracionView';
import LoginView from '../views/LoginView';
import RegistroView from '../views/RegistroView';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		meta: { rutaProtegida: true },
	},
	{
		path: '/about',
		name: 'about',
		// lazy load
		component: () => import('../views/AboutView.vue'),
		meta: { rutaProtegida: true },
	},
	{
		path: '/products',
		name: 'products',
		component: ProductsView,
		meta: { rutaProtegida: true },
	},
	{
		path: '/checkout',
		name: 'checkout',
		component: CheckoutView,
		meta: { rutaProtegida: true },
	},
	{
		path: '/admin',
		name: 'administracion',
		component: AdministracionView,
		meta: { rutaProtegida: true },
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView,
	},
	{
		path: '/registro',
		name: 'registro',
		component: RegistroView,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	if (to.meta.rutaProtegida) {
	  if (store.getters.usuarioAutenticado) {
		next();
	  } else {
		next("/login");
	  }
	} else {
	  next();
	}
  });

export default router;
