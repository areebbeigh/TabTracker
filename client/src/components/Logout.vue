<template>
  <v-container>
    <h1 class="text-xs-center display-1 pt-5">Logging out...</h1>
  </v-container>
</template>

<script>
import store from '@/store/store'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  async mounted () {
    await AuthenticationService.logout()
    this.displayToast('Logout successful!')
    this.$router.push({ name: 'songs-index' })
  }
}
</script>
