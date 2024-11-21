import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ItemForm from '../components/ItemForm.vue';
import ItemList from '../components/ItemList.vue';
import IniciarCompras from '../components/IniciarCompras.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/add-item', component: ItemForm },
  { path: '/items', component: ItemList },
  { path: '/start-shopping', component: IniciarCompras },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
