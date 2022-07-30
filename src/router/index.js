import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Main from '@/components/Main.vue';
import MemoryCards from '@/components/MemoryCards/MemoryCards.vue';
import Numbers from '@/components/Numbers/Numbers.vue';

const routes = [
  {
    path: '/',
    // name: 'Main',
    component: Main
  },
  {
    path: '/memory-cards',
    // name: 'MemoryCards',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MemoryCards
  },
  {
    path: '/numbers',
    // name: 'MemoryCards',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Numbers
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

 