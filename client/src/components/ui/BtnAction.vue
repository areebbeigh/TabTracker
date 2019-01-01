<template>
  <span>
    <template v-if="ownerActions.includes(action)">
      <v-btn
        v-if="user && user.id === song.UserId"
        icon
        flat
        :fab="fab"
        :small="fab"
        :class="{ 'grey darken-3 theme--dark': fab }"
        @click.prevent="clickHandler">
        <v-icon>{{actionIcons[action]}}</v-icon>
      </v-btn>
    </template>
    <v-btn
      v-else
      icon
      flat
      :fab="fab"
      :small="fab"
      :class="{ 'grey darken-3 theme--dark': fab }"
      @click.prevent="clickHandler">
      <v-icon>{{actionIcons[action]}}</v-icon>
    </v-btn>
  </span>
</template>

<script>
import { mapState } from 'vuex'

import store from '@/store/store'
import BookmarksService from '@/services/BookmarksService'
import SongsService from '@/services/SongsService'

export default {
  props: ['song', 'fab', 'action'],

  data () {
    return {
      ownerActions: ['edit', 'delete'],
      actionIcons: {
        edit: 'edit',
        bookmark: 'bookmark_border',
        delete: 'delete',
        share: 'share'
      },
      bookmarked: null,
      bookmarkId: null
    }
  },

  computed: {
    ...mapState(['isUserLoggedIn', 'user'])
  },

  methods: {
    clickHandler () {
      this[this.action]()
    },
    /**
     * Check if the song is bookmarked by the user and assign bookmark icon
     */
    async checkBookmark (songId) {
      if (this.action !== 'bookmark') return

      try {
        if (!this.isUserLoggedIn) {
          this.bookmarked = false
          return
        }

        const response = await BookmarksService.index({ songId: this.song.id })
        const bookmark = response.data.length ? response.data[0] : null

        if (bookmark) {
          this.bookmarked = true
          this.bookmarkId = bookmark.id || null
        } else {
          this.bookmarked = false
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

            this.displayToast('Bookmark added.')
          } else {
            await BookmarksService.delete(this.bookmarkId)
            this.displayToast('Bookmark removed.')
          }

          await this.checkBookmark()
        } else {
          this.displayToast('You need to be logged in!', { type: 'info' })
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

    async delete () {
      try {
        await SongsService.delete(this.song.id)

        this.displayToast('Song successfully deleted.', { type: 'success' })

        this.$root.$emit('fetchSongs')
      } catch (err) {
        this.displayToast('An error occured during the process.', { type: 'error' })
      }
    }
  },

  async mounted () {
    await this.checkBookmark()
  },

  watch: {
    async isUserLoggedIn (value) {
      await this.checkBookmark()
    },

    bookmarked (isBookmarked) {
      if (isBookmarked) {
        this.actionIcons.bookmark = 'bookmark'
      } else {
        this.actionIcons.bookmark = 'bookmark_border'
      }
    }
  }
}
</script>

<style>

</style>
