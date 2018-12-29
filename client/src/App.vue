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
  computed: {
    msg () {
      return store.state.msg
    }
  },
  watch: {
    msg (value) {
      if (!value) {
        return
      }

      switch (value.type) {
        case 'info':
          this.$toasted.info(value.msg)
          break
        case 'success':
          this.$toasted.success(value.msg)
          break
        case 'error':
          const toast = this.$toasted.error(value.msg)
          toast.el.classList.add('red', 'lighten-4', 'red--text', 'text--darken-3')
          break
        default:
          this.$toasted.show(value.msg)
      }

      store.dispatch('setMsg', null)
    }
  }
}
</script>

<style scoped>
</style>
