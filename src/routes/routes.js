import Alerts from '../components/AlertTable.vue';

const routes = [
  {
    path: '/alerts',
    name: 'Alerts',
    component: Alerts,
  },
  { path: '/', redirect: '/alerts' },
];

export default routes;
