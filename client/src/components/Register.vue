<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <h1 class="display-1 text-xs-center mb-4">Register</h1>
        <div class="red lighten-4 red--text text--darken-3 pa-2 mb-4 mt-2"
          v-html="error"
          v-show="error">
        </div>
        <v-text-field
          label="Email"
          type="email"
          v-model="email"
          outline
        ></v-text-field>

        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          outline
        ></v-text-field>

        <v-btn large flat @click="register">
          Register
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      this.error = null
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })

        this.$router.push({ name: 'songs-index' })
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}

.v-btn {
  width: 100%;
  margin: 0;
}
</style>
