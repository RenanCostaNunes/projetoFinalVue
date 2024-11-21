import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ItemForm from '../components/ItemForm.vue';
import ItemList from '../components/ItemList.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/add-item', component: ItemForm },
  { path: '/items', component: ItemList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
