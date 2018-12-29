import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  position: 'bottom-right',
  duration: '5000',
  action: {
    icon: 'close',
    onClick: (e, toast) => {
      toast.goAway(0)
    }
  }
})
