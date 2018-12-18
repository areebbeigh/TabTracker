<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AppHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AppHeader
  },
  data () {
    return {
      //
    }
  }
}
</script>
