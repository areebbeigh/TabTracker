import Api from '@/services/api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },

  login (credentials) {
    return Api().post('login', credentials)
  },

  logout () {
    return Api().get('logout')
  },

  user () {
    return Api().get('user')
  }
}
