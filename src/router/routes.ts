
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('~/pages/Home/index.vue'),
    meta: { title: 'Home' },
  },
]
