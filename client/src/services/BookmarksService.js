import Api from '@/services/api'

const root = 'bookmarks'

export default {
  index (search) {
    return Api().get(root, {
      params: { search }
    })
  },

  create ({ songId, userId }) {
    return Api().post(root, { userId, songId })
  },

  delete (id) {
    return Api().delete(`${root}/${id}`)
  },

  show ({ userId, songId }) {
    return Api().get(`${root}`, {
      params: { userId, songId }
    })
  }
}
