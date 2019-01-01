<template>
  <v-toolbar app flat color="grey lighten-3">
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title
      style="cursor:pointer"
      @click="$router.push({ name: 'songs-index' })">
      <span class="grey--text text--darken-2 font-weight-light">Tab</span>
      <span class="font-weight-regular">Tracker</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        flat
        :icon="displayIconsOnly"
        class="font-weight-regular"
        v-for="item in toolbarItems" :key="item.name"
        router :to="item.route"
        @click="handleClick(item)">
        <v-icon
          :class="{ 'ma-0': displayIconsOnly, 'ma-2': !displayIconsOnly }"
          left>
          {{ item.icon }}</v-icon>
        <span v-show="!displayIconsOnly">{{ item.name }}</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      items: {
        guests: [
          { name: 'Sign Up', icon: 'person_add', route: { name: 'register' } },
          { name: 'Login', icon: 'exit_to_app', route: { name: 'login' } }
        ],
        users: [
          { name: 'My Bookmarks', icon: 'collections_bookmark', route: { name: 'bookmarks' } },
          { name: 'Logout', icon: 'power_settings_new', route: { name: 'logout' } }
        ]
      }
    }
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user']),

    toolbarItems () {
      let items = []
      if (this.isUserLoggedIn) {
        items = this.items.users
      } else {
        items = this.items.guests
      }
      return items
    },

    displayIconsOnly () {
      return this.$vuetify.breakpoint.smAndDown
    }
  },
  methods: {
    handleClick (item) {
      if (item.handler) {
        this[item.handler]()
      }
    }
  },

  mounted () {
    this.$store.dispatch('checkAuth')
    this.displayToast('Hi!')
  }
}
</script>

<style scoped>
</style>
