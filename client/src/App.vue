<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <footer class="text-xs-center py-4 grey--text text--darken-2">
      <a href="https://github.com/areebbeigh/TabTracker">TabTracker</a>
      by
      <a href="https://github.com/areebbeigh/">@areebbeigh</a>
    </footer>
  </v-app>
</template>

<script>
import Songs from './components/Songs'
import AppHeader from '@/components/Header'

import store from '@/store/store'

export default {
  name: 'App',

  components: {
    Songs,
    AppHeader
  },

  mounted () {
    this.displayToast('Welcome to TabTracker demo!', {
      action: {
        text: 'GitHub',
        href: 'https://github.com/areebbeigh/TabTracker',
        target: '_blank'
      }
    })
  }
}
</script>

<style>
.toasted {
  font-family: 'Roboto', sans-serif;
}
footer a {
  text-decoration: none;
  color: #1b1818
}
</style>
