<template>
  <div class="mt-4 mx-5">
    <h1 class="display-1 text-xs-center mb-5">Songs</h1>
    <v-text-field
      label="Search"
      outline
      class="px-3"
      v-model.trim="search"
      ></v-text-field>
    <v-layout row wrap class="pa-0">
      <v-flex
        xs12 md6 lg4
        class="px-3"
        v-for="song in songs"
        :key="song.id">
        <v-card
          flat
          class="pa-3 grey lighten-3 mb-4"
          route :to="'/songs/' + song.id">
          <v-layout row>
            <v-flex xs7>
              <v-card-title>
                <div style="width:90%">
                  <h1 class="headline pb-2 pl-1">{{song.title}}</h1>
                  <v-divider class="mb-3"></v-divider>
                  <p class="subheading pl-2">{{song.album}}</p>
                  <p class="subheading pl-2">{{song.artist}}</p>
                </div>
              </v-card-title>
            </v-flex>

            <v-flex xs5>
              <v-img
                :src="song.albumCover"
                height="180px"
                cover>
              </v-img>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      songs: null,
      search: ''
    }
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
      console.log(this.songs)
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>

</style>
