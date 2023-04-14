import { createRouter, createWebHistory } from "vue-router"

const Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home/index.vue')
    },
    {
      path: "/SearchFilterTest",
      name: "SearchFilterTest",
      component: () => import('@/views/SearchFilterTest/index.vue'),
    },
    {
      path: "/InputTest",
      name: "InputTest",
      component: () => import('@/views/InputTest/index.vue'),
    },
    {
      path: "/ButtonTest",
      name: "ButtonTest",
      component: () => import('@/views/ButtonTest/index.vue'),
    },
    {
      path: "/RadioTest",
      name: "RadioTest",
      component: () => import('@/views/RadioTest/index.vue'),
    },
    {
      path: "/LinkTableTest",
      name: "LinkTableTest",
      component: () => import('@/views/LinkTableTest/index.vue'),
    },
  ],
})

export default Router
