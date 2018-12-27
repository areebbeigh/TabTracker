<template>
  <div class="mt-4 mx-5">
    <h1 class="display-1 text-xs-center mb-5">Songs</h1>
    <!-- Search box -->
    <v-text-field
      label="Search"
      outline
      class="px-3"
      v-model.trim="search"
    ></v-text-field>
    <songs-grid :songs="this.songs"></songs-grid>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import SongsService from '@/services/SongsService'

import SongsGrid from '@/components/commons/SongsGrid'

export default {
  data () {
    return {
      search: '',
      songs: []
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
      handler: debounce(async function (value) {
        try {
          this.search = value
          this.songs = (await SongsService.index(this.search)).data
        } catch (err) {
          console.error(err)
        }
      }, 700)
    }
  },

  async mounted () {
    try {
      let response = await SongsService.index()
      this.songs = response.data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>

</style>
