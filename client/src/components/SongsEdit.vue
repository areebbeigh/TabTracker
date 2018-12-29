<template>
  <v-container>
    <h1 class="display-1 text-xs-center mb-4">Edit Song</h1>
    <song-form :song="song" class="pa-0"></song-form>
    <div class="text-xs-center pa-0">
      <v-btn large flat @click="update">
        Save
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import store from '@/store/store'
import SongForm from '@/components/SongForm'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
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
    async update () {
      let song = {
        id: store.state.route.params.id
      }

      for (let [attr, def] of Object.entries(this.song)) {
        song[attr] = def.value
      }

      try {
        await SongsService.update(song)
        store.dispatch('setMsg', {
          type: 'success',
          msg: 'Changes successfully saved'
        })
      } catch (err) {
        store.dispatch('setMsg', {
          type: 'error',
          msg: err.response.data.error
        })
      }

      this.$router.push({
        name: 'songs-show',
        params: {
          id: song.id
        }
      })
    }
  },

  async mounted () {
    const id = store.state.route.params.id
    // Fetch song details
    try {
      const song = (await SongsService.show(id)).data

      if (song.UserId !== store.state.user.id) {
        // this.$router.back()
      }

      for (const [key, def] of Object.entries(song)) {
        try {
          this.song[key].value = def
        } catch (err) {
          console.log(err)
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>

</style>
