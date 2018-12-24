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
    <!-- Songs list -->
    <v-layout row wrap class="pa-0">
      <v-flex
        xs12 md6 lg4
        class="px-3"
        v-for="song in songs"
        :key="song.id">
        <song-card :song="song"></song-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import SongsService from '@/services/SongsService'

import SongCard from '@/components/ui/SongCard'
import BtnAction from '@/components/ui/BtnAction'

export default {
  data () {
    return {
      songs: null,
      search: ''
    }
  },

  components: {
    SongCard,
    BtnAction
  },

  watch: {
    search (value) {
      const route = {
        name: 'songs-index'
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
