<template>
  <div class="mt-4 mx-5">
    <h1 class="display-1 text-xs-center mb-5">My Bookmarks</h1>
    <!-- Search box -->
    <v-text-field
      label="Search"
      outline
      class="px-3"
      v-model.trim="search"
    ></v-text-field>
    <!-- Bookmarked Songs -->
    <songs-grid :songs="this.filteredSongs"></songs-grid>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import BookmarksService from '@/services/BookmarksService'

import SongsGrid from '@/components/commons/SongsGrid'

export default {
  data () {
    return {
      search: '',
      bookmarks: [],
      songs: [],
      filteredSongs: []
    }
  },

  components: {
    SongsGrid
  },

  watch: {
    search (value) {
      const route = {
        name: this.$route.name
      }

      if (this.search) {
        route.query = {
          search: this.search
        }
      }

      this.$router.push(route)
    },

    '$route.query.search': {
      immediate: true,
      handler: debounce(function (value) {
        this.search = value

        if (!value) {
          this.filteredSongs = this.songs
        } else {
          this.filteredSongs = this.songs.filter(song => {
            const contents = [song.title, song.album, song.lyrics, song.genre, song.artist]
            for (const content of contents) {
              if (content.toLowerCase().includes(value.toLowerCase())) {
                return true
              }
            }
            return false
          })
        }
      }, 700)
    },

    songs (value) {
      this.filteredSongs = value
    }
  },

  async mounted () {
    try {
      this.bookmarks = (await BookmarksService.index({ userId: this.$store.state.user.id })).data
      // Sort by most recent first
      this.bookmarks.sort((a, b) => {
        const createdA = new Date(a.createdAt)
        const createdB = new Date(b.createdAt)
        return createdB - createdA
      })
    } catch (err) {
      console.error(err)
    }

    for (const bookmark of this.bookmarks) {
      this.songs.push(bookmark.Song)
    }
  }
}
</script>

<style>

</style>
