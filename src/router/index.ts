import { createRouter, createWebHistory } from 'vue-router';

import SignInView from '@/components/SignIn.vue';
import IndexPageView from '@/components/IndexPage.vue';

const routes = [
  { path: '/', name:'index', component: IndexPageView },
  { path: '/signin', name:'signin', component: SignInView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export {router}