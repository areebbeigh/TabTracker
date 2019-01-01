<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view></router-view>
    </v-content>
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
      duration: null,
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
</style>
