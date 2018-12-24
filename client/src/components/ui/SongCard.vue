<template>
  <v-card
    flat
    class="grey lighten-3 mb-4"
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

      <v-flex
        xs5
        class="pa-2">
        <v-img
          :src="song.albumCover"
          height="180px"
          cover
          ></v-img>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-card-actions>
      <v-layout row>
        <!-- Public actions -->
        <v-flex>
          <btn-action
            :action="'bookmark'"
            :song="song"
          ></btn-action>
          <btn-action
            :action="'share'"
            :song="song"
          ></btn-action>
        </v-flex>
        <!-- Owner actions -->
        <v-flex class="text-xs-right">
          <btn-action
            :action="'edit'"
            :song="song"
          ></btn-action>
          <btn-action
            :action="'delete'"
            :song="song"
          ></btn-action>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
import BtnAction from './BtnAction'

export default {
  props: ['song'],
  components: {
    BtnAction
  }
}
</script>

<style>

</style>
