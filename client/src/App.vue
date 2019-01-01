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
  }
}
</script>

<style scoped>
</style>
