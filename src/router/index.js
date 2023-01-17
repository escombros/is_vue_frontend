import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/main/main-index'),
    hidden: true
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/main-index'),
    hidden: true
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/main-index'),
    hidden: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/user/main-index'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
      if(!localStorage.getItem('token')){
        next({
          name: 'home'
        });
      } else {
        next();
      }
    } else {
      next();
    }


});

export default router


