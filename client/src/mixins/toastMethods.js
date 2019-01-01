import Vue from 'vue'

Vue.mixin({
  methods: {
    displayToast ({ type, msg }) {
      if (!['info', 'success', 'error'].includes(type)) {
        type = 'default'
      }
      this.$toasted.show(msg, { type })
    }
  }
})
