import Vue from 'vue'
import Router from 'vue-router'
import Songs from '@/components/Songs'
import Register from '@/components/Register'
import Login from '@/components/Login'
import SongsCreate from '@/components/SongsCreate'
import SongsEdit from '@/components/SongsEdit'
import Bookmarks from '@/components/Bookmarks'

import ViewSong from '@/components/ViewSong/index'

Vue.use(Router)

export default new Router({
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
      component: SongsCreate
    },
    {
      path: '/songs/:id',
      name: 'songs-show',
      component: ViewSong
    },
    {
      path: '/songs/:id/edit',
      name: 'songs-update',
      component: SongsEdit
    },
    {
      path: '/bookmarks',
      name: 'bookmarks',
      component: Bookmarks
    },
    {
      path: '*',
      redirect: '/songs'
    }
  ]
})
