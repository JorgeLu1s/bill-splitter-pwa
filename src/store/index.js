import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],

  state: {
    customers: [],
    groups: [],
    promo: true
  },

  getters: {
    getCustomers (state) {
      return state.customers
    },

    getGroups (state) {
      return state.groups
    },

    getCustomerById: (state) => (id) => {
      return state.customers.find(customer => customer.id === id)
    },

    getGroupById: (state) => (id) => {
      return state.groups.find(group => group.id === id)
    },

    getPromo (state) {
      return state.promo
    },

    getTotal (state) {
      var total = 0

      state.customers.forEach(customer => {
        total += parseInt(customer.total)
      })

      if (state.promo) {
        total = total / 2
      }

      state.groups.forEach(group => {
        total += parseInt(group.price)
      })

      return total
    },

    getTip (state, getters) {
      return (getters.getTotal * 10) / 100
    },

    getTotalAndTip (state, getters) {
      return getters.getTotal + getters.getTip
    },
  },

  actions: {
    addCustomer ({commit}, customer) {
      commit('pushCustomer', customer)
    },

    addGroup ({commit}, group) {
      commit('pushGroup', group)
    },

    togglePromo ({commit}) {
      commit('togglePromo')
    },

    updateGroupCustomers ({commit, getters}, {groupId, customers}) {
      var group = getters.getGroupById(groupId)
      group.customers = customers

      if (group.customers.length > 0) {
        group.individual = group.price / group.customers.length
      } else {
        group.individual = 0
      }
    },

    removeCustomer ({commit}, customerId) {
      commit('removeCustomer', customerId)
    },

    resetData ({commit}) {
      commit('resetData')
    },

    removeGroup ({commit}, groupId) {
      commit('removeGroup', groupId)
    }
  },

  mutations: {
    pushCustomer (state, customer) {
      state.customers.push(customer)
    },

    pushGroup (state, group) {
      state.groups.push(group)
    },

    togglePromo (state) {
      state.promo = !state.promo
    },

    removeCustomer (state, customerId) {
      state.customers = state.customers.filter(c => c.id !== customerId)
    },

    resetData (state) {
      state.customers = []
      state.groups = []
    },

    removeGroup (state, groupId) {
      state.groups = state.groups.filter(group => group.id !== groupId)
    }
  }
})
