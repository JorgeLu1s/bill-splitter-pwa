<template>
  <v-app id="app" text-center dark app>
    <v-toolbar color="black" >
      <v-toolbar-title>Bourbon Calculator</v-toolbar-title>
      <v-spacer></v-spacer>
      <Options></Options>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import BottomNav from '@/components/BottomNav'
import Options from '@/components/Options'

export default {
  name: 'App',
  components: { BottomNav, Options }
}
</script>

<style>
body {
  background-color: black;
}
</style>
