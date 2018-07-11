<template>
  <v-bottom-nav color="black" :value="true" :active.sync="e1" app>
    <v-btn flat color="white" value="home" to="/">
      <span>Home</span>
      <v-icon>home</v-icon>
    </v-btn>
    <v-btn flat color="white" value="person" to="/new">
      <span>Add Person</span>
      <v-icon>person</v-icon>
    </v-btn>
    <v-btn flat color="white" value="groups" to="/newGroup">
      <span>Add Group</span>
      <v-icon>group</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
export default {
  name: 'BottomNav',
  data () {
    return {
      e1: 'home'
    }
  }
}
</script>
