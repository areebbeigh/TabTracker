<template>
  <v-toolbar app flat color="grey lighten-3">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>
      <span class="grey--text text--darken-2 font-weight-light">Tab</span>
      <span class="font-weight-regular">Tracker</span>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat class="font-weight-regular" 
        v-for="item in toolbarItems" :key="item.name"
        router :to="item.link">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.name }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      toolbarItems: [
        { name: 'Sign Up', icon: 'account_circle', link: '/register' },
        { name: 'Login', icon: 'exit_to_app', link: '/login' }
      ]
    }
  }
}
</script>

