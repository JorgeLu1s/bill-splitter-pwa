<template>
  <div>
    <v-tabs v-model="active" slider-color="white" centered fixed-tabs>
      <v-tab to="/">
        <v-icon>home</v-icon>
      </v-tab>
      <v-tab to="/new">
        <v-icon>person</v-icon>
      </v-tab>
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
