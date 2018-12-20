<template>
  <v-container>
    <h1 class="display-1 text-xs-center mb-4">Add Song</h1>
    <v-layout row wrap justify-center>
      <v-flex xs12 md6 class="px-4 fields-l">
        <template v-for="(def, name) in song">
          <v-text-field
            v-if="def.type === 'string'"
            :key="name"
            v-model="def.value"
            :label="name"
            outline
            ></v-text-field>
        </template>
      </v-flex>
      <v-flex xs12 md6 class="px-4">
        <template v-for="(def, name) in song">
          <v-textarea
            v-if="def.type === 'text'"
            :key="name"
            v-model="def.value"
            :label="name"
            outline
            ></v-textarea>
        </template>
      </v-flex>
      <v-btn large flat @click="create">
          Create
      </v-btn>
    </v-layout>
  </v-container>  
</template>

<script>
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

  methods: {
    async create () {
      // Prepare song object to send to server
      let song = {}
      for (let [attr, def] of Object.entries(this.song)) {
        song[attr] = def.value
      }

      try {
        const response = await SongsService.create(song)
        this.$router.push({name: 'songs'})
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


