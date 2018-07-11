<template>
  <div>
    <h1>{{ group.name }}</h1>
    <h2>{{ group.price | currency }}</h2>
    <v-text-field v-model="group.name" label="Name"></v-text-field>
    <v-text-field v-model="group.price" label="Price" type="number" pattern="\d*"></v-text-field>
    <br>

    <v-list>
      <v-subheader>People</v-subheader>
      <v-list-tile v-for="person in people" :key="person.id">
        <v-list-tile-content>
          <v-checkbox :label="person.name" type="checkbox" v-model="selected" :id="person.id" :value="person.id"></v-checkbox>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <br>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          <v-btn block color="success" @click="save">Save</v-btn>
        </v-flex>
        <v-flex xs6>
          <v-btn block color="error" to="/">Cancel</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Group',
  props: ['id'],

  data: function () {
    return {
      group: {},
      selected: [],
    }
  },

  computed: {
    ...mapGetters({
      people: 'getPeople',
    }),
  },

  methods: {
    save: function () {
      if (typeof this.id === 'undefined') {
        this.group.people = this.selected

        if (this.selected.length > 0) {
          this.group.individual = this.group.price / this.selected.length
        }

        this.$store.dispatch('addGroup', this.group)
      } else {
        this.$store.dispatch('updateGroupPeople', {groupId: parseInt(this.id), people: this.selected})
      }
      this.$router.push('/')
    },
  },

  mounted: function () {
    if (typeof this.id === 'undefined') {
      this.group = { id: Date.now(), name: '', price: null, individual: 0, people: [] }
    } else {
      this.group = this.$store.getters.getGroupById(parseInt(this.id))
      this.selected = this.group.people
    }
  }
}
</script>
