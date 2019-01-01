<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <h1 class="display-1 text-xs-center mb-4">Login</h1>
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

        <v-btn large flat @click="login">
          Login
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store/store'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      this.error = null
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })

        this.displayToast({
          type: 'success',
          msg: 'Login successful!'
        })

        this.$router.push({ name: 'songs-index' })
      } catch (err) {
        this.displayToast({
          type: 'error',
          msg: err.response.data.error
        })
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
