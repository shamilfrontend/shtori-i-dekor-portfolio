import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/home/index.vue'
import AboutPage from './pages/about/index.vue'
import ServicesPage from './pages/services-prices/index.vue'
import ContactsPage from './pages/contacts/index.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },

  {
    path: '/about',
    component: AboutPage
  },

  {
    path: '/services-and-prices',
    component: ServicesPage
  },

  {
    path: '/contacts',
    component: ContactsPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
