import {
  createRouter,
  createWebHistory
} from 'vue-router';
import TrafficLight from '@/components/TrafficLight.vue';
// import LightRed from '@/components/view/LightRed.vue';
// import LightYellow from '@/components/view/LightYellow.vue';
// import LightGreen from '@/components/view/LightGreen.vue';





const routes = [{
    path: '/',
    name: 'traffic-light',
    component: TrafficLight,
  },
  {
    path: '/red',
    name: 'light-red',
    component: TrafficLight,
  },
  {
    path: '/yellow',
    name: 'light-yellow',
    component: TrafficLight,
  },
  {
    path: '/green',
    name: 'light-green',
    component: TrafficLight,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;