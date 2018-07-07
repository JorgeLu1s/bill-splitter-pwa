<template>
  <div>
    <v-layout row wrap justify-space-between>
      <v-flex xs2>
        <h1 style="color: red" v-show="promo">2&times;1</h1>
      </v-flex>
    </v-layout>

    <v-switch :label="promoText" v-model="promo"></v-switch>
    <v-layout row justify-space-between>
      <v-flex xs12>
    <v-card>
      <v-container fluid grid-list-md>
        <v-list dense>
          <v-list-tile>
            <v-list-tile-content class="title">Total:</v-list-tile-content>
            <v-list-tile-content class="align-end title">{{ total | currency }}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-content class="title">Total + Tip:</v-list-tile-content>
            <v-list-tile-content class="align-end title">{{ totalTip | currency }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-container>
    </v-card>
      </v-flex>
    </v-layout>

    <br>

    <ArrayList :items="customers" title="Customers" route="customer"></ArrayList>
    <ArrayList :items="groups" title="Groups" route="group"></ArrayList>
  </div>
</template>

<script>
import Customer from '@/components/Customer'
import ArrayList from '@/components/ArrayList'
import BottomNav from '@/components/BottomNav'
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
  name: 'Index',
  components: { Customer, ArrayList, BottomNav },
  computed: {
    ...mapGetters({
      customers: 'getCustomers',
      total: 'getTotal',
      groups: 'getGroups',
      tip: 'getTip',
      totalTip: 'getTotalAndTip'
    }),

    promoText: function () {
      return this.promo === true ? 'Turn promo off' : 'Turn promo on'
    },

    promo: {
      get () {
        return this.$store.getters.getPromo
      },
      set (value) {
        this.$store.commit('togglePromo', value)
      }
    }
  },

  methods: {
    ...mapActions({
      togglePromo: 'togglePromo'
    }),

    isInGroup: function (customer, groupId) {

      this.group.customers.find(c => c.id === customer.id)
    },
  },
}
</script>
