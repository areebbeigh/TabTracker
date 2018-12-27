<template>
  <!-- The if is simply to avoid console errors before the song is fetched -->
  <v-container v-if="song">
    <!-- YouTube Video -->
    <v-layout row justify-center class="pb-5">
      <v-flex xs12 >
        <youtube :video-id="song.youtubeId" player-width="100%"></youtube>
      </v-flex>
    </v-layout>

    <!-- Display song metadata -->
    <v-layout row wrap>
      <!-- Album cover -->
      <v-flex xs12 sm5>
        <v-img
          :src="song.albumCover"
          max-height="300px"
          cover
        ></v-img>
      </v-flex>

      <!-- Metadata -->
      <v-flex xs12 sm7>
        <div
          class="text-xs-right py-4"
          :class="{'pl-4': $vuetify.breakpoint.smAndUp}">
          <h1 class="headline pb-2 pr-2 text-xs-center text-sm-right">{{song.title}}</h1>
          <v-divider class="mb-3"></v-divider>
          <v-layout row class="px-2">
            <v-flex xs6 class="text-xs-left">
              <p class="subheading">Album</p>
              <p class="subheading">Artist</p>
              <p class="subheading">Genre</p>
            </v-flex>

            <v-flex xs6>
              <p class="subheading">{{song.album}}</p>
              <p class="subheading">{{song.artist}}</p>
              <p class="subheading">{{song.genre}}</p>
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
    <v-divider width="80%" class="pb-3 mt-3 mx-auto"></v-divider>
    <v-layout row wrap>
      <!-- Lyrics -->
      <v-flex xs12 lg6 class="pr-2">
        <h1 class="headline text-xs-center mb-3">Lyrics</h1>
        <v-textarea
          solo
          flat
          readonly
          auto-grow
          background-color="grey lighten-4"
          v-model="song.lyrics" />
      </v-flex>
      <!-- Tab -->
      <v-flex xs12 lg6 class="pl-2">
        <h1 class="headline text-xs-center mb-3">Tabs</h1>
        <v-textarea
          solo
          flat
          readonly
          auto-grow
          background-color="grey lighten-4"
          v-model="song.tabs" />
      </v-flex>
    </v-layout>
    <speed-dial :song="song"></speed-dial>
  </v-container>
</template>

<script>
import { YouTubePlayer } from 'vue-youtube-embed'
import SongsService from '@/services/SongsService'
import SpeedDial from './SpeedDial'

export default {
  data () {
    return {
      song: null
    }
  },

  components: {
    youtube: YouTubePlayer,
    SpeedDial
  },

  async mounted () {
    const songId = this.$store.state.route.params.id
    try {
      const response = await SongsService.show(songId)
      this.song = response.data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>

</style>
