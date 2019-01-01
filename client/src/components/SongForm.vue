<template>
  <div>
    <v-layout row wrap justify-center>
      <!-- Text fields -->
      <v-flex
        xs12 md6
        class="fields-l"
        :class="{ 'px-2': $vuetify.breakpoint.smAndUp }"
        v-for="[name, def] in textFields"
        :key="name.toString()">
          <v-text-field
            v-if="def.type === 'string'"
            v-model="def.value"
            :label="name"
            outline
            ></v-text-field>
      </v-flex>
      <v-flex xs6 v-if="textFields.length % 2 != 0"></v-flex>
      <!-- Text areas -->
      <v-flex
        xs12 md6
        :class="{ 'px-2': $vuetify.breakpoint.smAndUp }"
        v-for="[name, def] in textAreas"
        :key="name">
          <v-textarea
            v-if="def.type === 'text'"
            v-model="def.value"
            :label="name"
            outline
            auto-grow
            ></v-textarea>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: ['song'],

  computed: {
    textFields () {
      return this.getAllOfType('string')
    },

    textAreas () {
      return this.getAllOfType('text')
    }
  },

  methods: {
    /* Return all fields of given type from this.song */
    getAllOfType (type) {
      let fields = []

      for (const [key, def] of Object.entries(this.song)) {
        if (def.type === type) {
          fields.push([key, def])
        }
      }
      return fields
    }
  }
}
</script>

<style scoped>

</style>
