<template>
  <div>
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
import SongCard from '@/components/ui/SongCard'
import BtnAction from '@/components/ui/BtnAction'

export default {
  props: ['songs'],
  data () {
    return { }
  },

  components: {
    SongCard,
    BtnAction
  }
}
</script>

<style>

</style>
