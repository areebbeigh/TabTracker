<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs12 md8>
        <v-card 
          flat 
          class="pa-3 grey lighten-3 mb-4" 
          v-for="song in songs" 
          :key="song.id"
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
  </v-container>
</template>

<script>
  import SongsService from '@/services/SongsService'

  export default {  
    data () {
      return { 
        songs: null
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
