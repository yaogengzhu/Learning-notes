import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/main', component: '@/pages/main/main' },
    { path: '/drag', component: '@/pages/drag/index' },
    { path: '/editor', component: '@/pages/editor/index' },
  ],
});
