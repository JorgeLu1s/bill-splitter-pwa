<template>
  <div>
    <h1>{{ person.name }}</h1>
    <h2>{{ total | currency }} - {{ total | tip | currency }}</h2>
    <v-text-field v-model="person.name" label="Name"></v-text-field>
    <br>
    <div v-for="(product, index) in person.products">
      <ProductItem :product="product" :index="index" v-on:remove-product="removeProduct"></ProductItem>
    </div>
    <v-btn block color="primary" @click="addProduct">Add product</v-btn>

    <br>

    <v-list>
      <v-subheader>Groups</v-subheader>
      <v-list-tile v-for="group in groups" v-if="isInGroup(group)" :key="group.id">
        <v-list-tile-content>
          {{ group.name }} - {{ group.individual | currency }}
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-if="!group">
        <v-list-tile-content>Empty</v-list-tile-content>
      </v-list-tile>
    </v-list>

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
import ProductItem from '@/components/productItem'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Person',
  components: { ProductItem },
  props: ['id'],
  data () {
    return {
      person: {},
      totalGroup: 0,
      group: false
    }
  },

  computed: {
    ...mapGetters({
      promo: 'getPromo',
      groups: 'getGroups'
    }),

    total: function () {
      var total = 0

      if (this.person.products) {
        this.person.products.forEach(product => {
          total += parseInt(product.price)
        })
      }

      this.person.total = total

      if (this.promo) {
        total = total / 2
      }

      return total
    }
  },

  methods: {
    save: function () {
      if (typeof this.id === 'undefined') {
        this.$store.dispatch('addPerson', this.person)
      }
      this.$router.push('/')
    },

    addProduct: function () {
      this.person.products.push({id: Date.now(), name: '', price: null})
    },

    removeProduct: function (index) {
      this.person.products.splice(index, 1)
    },

    isInGroup: function (group) {
      if (group.people.find(id => id === this.person.id)) {
        this.group = true
        return true
      }

      return false
    },

    getTotalGroup: function (individual) {
      this.totalGroup += individual
    }
  },

  mounted: function () {
    if (typeof this.id === 'undefined') {
      this.person = { id: Date.now(), name: '', products: [], total: 0 }
    } else {
      this.person = this.$store.getters.getPersonById(parseInt(this.id))
    }
  }
}
</script>
