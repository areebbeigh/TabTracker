import Api from '@/services/api'

export default {
  index () {
    return Api().get('songs')
  },

  create (song) {
    return Api().post('songs', song)
  },

  update (song) {
    return Api().put('songs', song)
  },

  show (id) {
    return Api().get(`songs/${id}`)
  }
}
