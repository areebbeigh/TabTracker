import Vue from 'vue'
import Router from 'vue-router'
import Songs from '@/components/Songs'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import SongsCreate from '@/components/SongsCreate'
import SongsEdit from '@/components/SongsEdit'
import Bookmarks from '@/components/Bookmarks'

import ViewSong from '@/components/ViewSong/index'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs-index',
      component: Songs
    },
    {
      path: '/songs/new',
      name: 'songs-create',
      component: SongsCreate,
      meta: { requiresAuth: true }
    },
    {
      path: '/songs/:id',
      name: 'songs-show',
      component: ViewSong
    },
    {
      path: '/songs/:id/edit',
      name: 'songs-update',
      component: SongsEdit,
      meta: { requiresAuth: true }
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: Bookmarks,
      meta: { requiresAuth: true }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '*',
      redirect: '/songs'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.isUserLoggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath, err: true }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
