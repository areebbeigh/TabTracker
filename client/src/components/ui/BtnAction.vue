<template>
  <v-btn
    icon
    flat
    :fab="fab"
    :small="fab"
    :class="{ 'grey darken-3 theme--dark': fab }"
    @click.prevent="clickHandler">
    <v-icon>{{actionIcons[action]}}</v-icon>
  </v-btn>
</template>

<script>
import { mapState } from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
  props: ['song', 'fab', 'action'],

  data () {
    return {
      actionIcons: {
        edit: 'edit',
        bookmark: 'bookmark_border',
        delete: 'delete',
        share: 'share'
      },
      bookmarked: false
    }
  },

  computed: {
    ...mapState(['isUserLoggedIn', 'user'])
  },

  methods: {
    clickHandler () {
      this[this.action]()
    },

    async checkBookmark (songId) {
      try {
        if (!this.isUserLoggedIn) {
          return
        }

        const response = await BookmarksService.show({ userId: this.user.id, songId: this.song.id })

        if (response.data) {
          this.actionIcons.bookmark = 'bookmark'
          this.bookmarked = true
          this.bookmarkId = response.data.id || null
        } else {
          this.actionIcons.bookmark = 'bookmark_border'
          this.bookmarked = false
          this.bookmarkId = null
        }
      } catch (err) {
        console.error(err)
      }
    },

    async bookmark () {
      try {
        if (this.isUserLoggedIn) {
          if (!this.bookmarked) {
            await BookmarksService.create({
              userId: this.user.id,
              songId: this.song.id
            })
          } else {
            await BookmarksService.delete(this.bookmarkId)
          }

          await this.checkBookmark()
        } else {
          this.$router.push({ name: 'login' })
        }
      } catch (err) {
        console.error(err)
      }
    },

    edit () {
      this.$router.push({
        name: 'songs-update',
        params: {
          id: this.song.id
        }
      })
    },

    delete () {

    }
  },

  async mounted () {
    await this.checkBookmark()
  }
}
</script>

<style>

</style>
