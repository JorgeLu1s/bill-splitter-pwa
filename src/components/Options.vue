<template>
  <v-menu bottom>
    <v-btn slot="activator" icon dark>
      <v-icon>more_vert</v-icon>
    </v-btn>
    <v-list>
      <v-list-tile v-if="global" @click="reset">
        <v-list-tile-title>Reset Data</v-list-tile-title>
      </v-list-tile>
      <v-list-tile v-else @click="remove">
        <v-list-tile-title>Delete Item</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Options',
  data: function () {
    return {
      text: 'Reset'
    }
  },
  computed: {
    global: function () {
      if (this.$route.name === 'index') {
        return true
      }

      return false
    }
  },
  methods: {
    ...mapActions({
      reset: 'resetData'
    }),

    reset: function () {
      this.$store.dispatch('resetData')
    },

    remove: function () {
      switch (this.$route.name) {
        case 'newPerson':
        case 'person':
          this.$store.dispatch('removePerson', this.$route.params.id)
          this.$router.push('/')
          break;
        case 'newGroup':
        case 'group':
          this.$store.dispatch('removeGroup', this.$route.params.id)
          this.$router.push('/')
          break;
      }
    }
  }
}
</script>
