import Api from '@/services/api'

export default {
  create (song) {
    return Api().post('songs', song)
  }
}
