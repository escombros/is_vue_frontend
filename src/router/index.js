import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
  {
    path: '/',
    name: 'home',
<<<<<<< HEAD
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
=======
    component: () => import('@/views/login/main-index'),
    hidden: true
>>>>>>> b5201acfa199ea09f8c1e0a7f10d25bbdcb0d464
  },
  {
    path: '/about',
    name: 'about',
<<<<<<< HEAD
    component: () => import('@/views/user/main-index'),
=======
    component: () => import('@/views/usuario/main-index'),
>>>>>>> b5201acfa199ea09f8c1e0a7f10d25bbdcb0d464
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


