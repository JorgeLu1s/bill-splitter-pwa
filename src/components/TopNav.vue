<template>
  <div>
    <v-tabs v-model="active" slider-color="white" centered>
      <v-tab to="/">
        <v-icon>home</v-icon>
      </v-tab>
      <v-spacer></v-spacer>
      <v-tab to="/new">
        <v-icon>person</v-icon>
      </v-tab>
      <v-spacer></v-spacer>
      <v-tab to="/newGroup">
        <v-icon>group</v-icon>
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      active: 'home'
    }
  }
}
</script>
