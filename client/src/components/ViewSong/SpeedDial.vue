<template>
  <v-speed-dial
    fixed
    bottom
    right
  >
    <v-btn
      slot="activator"
      color="grey darken-4"
      dark
      fab
    >
      <v-icon>keyboard_arrow_up</v-icon>
      <v-icon>close</v-icon>
    </v-btn>

    <btn-action
      v-for="action in actions"
      :key="action"
      :song="song"
      :fab="true"
      :action="action"
    ></btn-action>
  </v-speed-dial>
</template>

<script>
/* ViewSong speed dial component */
import BtnAction from '@/components/ui/BtnAction'

export default {
  props: ['song'],
  data () {
    return {
      actions: ['bookmark', 'edit', 'delete']
    }
  },
  components: {
    BtnAction
  }
}
</script>

<style>

</style>
