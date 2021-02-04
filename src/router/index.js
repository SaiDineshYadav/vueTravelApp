import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store.js';



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  {
    path: '/destination/:slug',
    name: 'DestinationDetails',
    props: true,
    component: () =>   import(/* webpackChunkName: 'DestinationDetails' */ '../views/DestinationDetails.vue'),
    children: [
      {
        path: ':experienceSlug',
        name: 'ExperienceDetails',
        props: true,
        component: () =>   import(/* webpackChunkName: 'ExperienceDetails' */ '../views/ExperienceDetails.vue')
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(destinaton => destinaton.slug == to.params.slug);
      if (exists) {
        next();
      } else {
        next({name: 'NotFound'});
      }
    }
  },
  {
    path: '/user',
    name: 'User',
    component: () => 
    import(/* webpackChunkName: 'User' */ '../views/User.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => 
    import(/* webpackChunkName: 'Login' */ '../views/Login.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: '/404',
    alias: '*',
    name: 'NotFound',
    component: () =>
      import(/* webpackChunkName: 'NotFound' */ '../views/NotFound.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // need to login
    if (store.user == '') {
      next({
        name: 'Login'
      })
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
