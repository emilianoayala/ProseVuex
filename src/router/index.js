import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProductsView from '../views/ProductsView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import AdministracionView from '../views/AdministracionView';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		// lazy load
		component: () => import('../views/AboutView.vue'),
	},
	{
		path: '/products',
		name: 'products',
		component: ProductsView,
	},
	{
		path: '/checkout',
		name: 'checkout',
		component: CheckoutView,
	},
	{
		path: '/admin',
		name: 'administracion',
		component: AdministracionView,
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
