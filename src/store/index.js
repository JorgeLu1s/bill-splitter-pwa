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
    people: [],
    groups: [],
    promo: true
  },

  getters: {
    getPeople (state) {
      return state.people
    },

    getGroups (state) {
      return state.groups
    },

    getPersonById: (state) => (id) => {
      return state.people.find(person => person.id === id)
    },

    getGroupById: (state) => (id) => {
      return state.groups.find(group => group.id === id)
    },

    getPromo (state) {
      return state.promo
    },

    getTotal (state) {
      var total = 0

      state.people.forEach(person => {
        total += parseInt(person.total)
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
    addPerson ({commit}, person) {
      commit('pushPerson', person)
    },

    addGroup ({commit}, group) {
      commit('pushGroup', group)
    },

    togglePromo ({commit}) {
      commit('togglePromo')
    },

    updateGroupPeople ({commit, getters}, {groupId, people}) {
      var group = getters.getGroupById(groupId)
      group.people = people

      if (group.people.length > 0) {
        group.individual = group.price / group.people.length
      } else {
        group.individual = 0
      }
    },

    removePerson ({commit}, personId) {
      commit('removePerson', personId)
    },

    resetData ({commit}) {
      commit('resetData')
    },

    removeGroup ({commit}, groupId) {
      commit('removeGroup', groupId)
    }
  },

  mutations: {
    pushPerson (state, person) {
      state.people.push(person)
    },

    pushGroup (state, group) {
      state.groups.push(group)
    },

    togglePromo (state) {
      state.promo = !state.promo
    },

    removePerson (state, personId) {
      state.people = state.people.filter(c => c.id !== personId)
    },

    resetData (state) {
      state.people = []
      state.groups = []
    },

    removeGroup (state, groupId) {
      state.groups = state.groups.filter(group => group.id !== groupId)
    }
  }
})
