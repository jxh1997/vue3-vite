import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import("/@/views/Login.vue"),
  }, {
    path: '/Home',
    component: () => import('/@/views/Home.vue'),
    children: [
      {
        path: '/index',
        component: () => import('/@/views/Index.vue'),
        meta: { title: '首页' },
      },
      {
        path: '/admin',
        component: () => import('/@/views/Admin.vue'),
        meta: { title: '状态管理' },
      },
      {
        path: '/center',
        component: () => import('/@/views/Center.vue'),
        meta: { title: '个人中心' },
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})