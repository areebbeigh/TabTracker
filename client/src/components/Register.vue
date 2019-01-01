<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 md6 lg4>
        <h1 class="display-1 text-xs-center mb-4">Register</h1>
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
import store from '@/store/store'
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
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

        this.displayToast('Login successful!', { type: 'success' })
        this.$router.push({ name: 'songs-index' })
      } catch (err) {
        this.displayToast(err.response.data.error, { type: 'error' })
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
