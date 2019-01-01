import Vue from 'vue'

Vue.mixin({
  methods: {
    displayToast (msg, options) {
      this.$toasted.show(msg, options)
    }
  }
})
