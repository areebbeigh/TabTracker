<template>
  <v-container>
    <h1 class="display-1 text-xs-center mb-4">Add Song</h1>
    <song-form :song="song" class="pa-0"></song-form>
    <div class="text-xs-center pa-0">
      <v-btn large flat @click="create">
        Save
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import SongForm from '@/components/SongForm'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      error: null,
      song: {
        title: { type: 'string', required: true, value: null },
        artist: { type: 'string', required: true, value: null },
        genre: { type: 'string', required: true, value: null },
        album: { type: 'string', required: true, value: null },
        albumCover: { type: 'string', required: true, value: null },
        youtubeId: { type: 'string', required: true, value: null },
        lyrics: { type: 'text', required: true, value: null },
        tabs: { type: 'text', required: true, value: null }
      }
    }
  },

  components: {
    SongForm
  },

  methods: {
    async create () {
      // Prepare song object to send to server
      let song = {}
      for (let [attr, def] of Object.entries(this.song)) {
        song[attr] = def.value
      }

      try {
        await SongsService.create(song)
        this.$router.push({ name: 'songs-index' })
        // console.log(response.data)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.flex.fields-l {
  /* border-right: 1px solid rgb(0, 0, 0, 0.1); */
}
</style>
