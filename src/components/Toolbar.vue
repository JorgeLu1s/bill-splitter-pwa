<template>
  <div>
    <v-toolbar color="black" fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Bourbon Calculator</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="new">New Person</v-btn>
        <v-btn flat to="newGroup">New Group</v-btn>
      </v-toolbar-items>
      <Options></Options>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" clipped absolute temporary>
      <v-list>
        <v-list-tile color="white" to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile color="white" to="new">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Add Person</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile color="white" to="newGroup">
          <v-list-tile-action>
            <v-icon>group</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Add Group</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile color="white" @click="reset">
          <v-list-tile-action>
            <v-icon>clear</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Reset Data</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Options from '@/components/Options'

export default {
  name: 'Toolbar',
  components: { Options },
  data () {
    return {
      drawer: null
    }
  },
  methods: {
    ...mapActions({
      reset: 'resetData'
    })
  }
}
</script>
