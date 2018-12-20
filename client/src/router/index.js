import Vue from 'vue'
import Router from 'vue-router'
import Songs from '@/components/Songs'
import Register from '@/components/Register'
import Login from '@/components/Login'
import SongsCreate from '@/components/SongsCreate'

import ViewSong from '@/components/ViewSong/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'songs',
      component: Songs
    },
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
      path: '/songs/new',
      name: 'songs-create',
      component: SongsCreate
    },
    {
      path: '/songs/:id',
      name: 'songs-show',
      component: ViewSong
    }
  ]
})
