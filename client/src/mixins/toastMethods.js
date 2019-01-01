import Vue from 'vue'

Vue.mixin({
  methods: {
    displayToast (msg, options = {}) {
      let action = []

      if (this.$vuetify.breakpoint.xsOnly) {
        options.position = 'bottom-center'
      }

      if (options.action) {
        if (Array.isArray(options.action)) {
          action.concat(options.action)
        } else {
          action.push(options.action)
        }
      }

      action.push({
        icon: 'close',
        onClick: (e, toast) => {
          toast.goAway(0)
        }
      })

      options = {
        ...options,
        action
      }

      this.$toasted.show(msg, options)
    }
  }
})
