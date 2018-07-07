<template>
  <div>
    <h1>{{ customer.name }}</h1>
    <h2>{{ total | currency }} - {{ total | tip | currency }}</h2>
    <v-text-field v-model="customer.name" label="Name"></v-text-field>
    <br>
    <div v-for="(product, index) in customer.products">
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
      <v-list-tile v-else>
        empty
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
  name: 'Customer',
  components: { ProductItem },
  props: ['id'],
  data () {
    return {
      customer: {},
      totalGroup: 0
    }
  },

  computed: {
    ...mapGetters({
      promo: 'getPromo',
      groups: 'getGroups'
    }),

    total: function () {
      var total = 0

      if (this.customer.products) {
        this.customer.products.forEach(product => {
          total += parseInt(product.price)
        })
      }

      this.customer.total = total

      if (this.promo) {
        total = total / 2
      }

      return total
    }
  },

  methods: {
    save: function () {
      if (typeof this.id === 'undefined') {
        this.$store.dispatch('addCustomer', this.customer)
      }
      this.$router.push('/')
    },

    addProduct: function () {
      this.customer.products.push({id: Date.now(), name: '', price: null})
    },

    removeProduct: function (index) {
      this.customer.products.splice(index, 1)
    },

    isInGroup: function (group) {
      if (group.customers.find(id => id === this.customer.id)) {
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
      this.customer = { id: Date.now(), name: '', products: [], total: 0 }
    } else {
      this.customer = this.$store.getters.getCustomerById(parseInt(this.id))
    }
  }
}
</script>
