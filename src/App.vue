<template>
  <v-app id="app" text-center dark app>
    <v-toolbar color="black" fixed>
      <v-toolbar-title>Bourbon Calculator</v-toolbar-title>
      <v-spacer></v-spacer>
      <Options></Options>
    </v-toolbar>
    <v-content>
      <TopNav v-if="browser == 'android'"></TopNav>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <BottomNav v-if="browser == 'ios'"></BottomNav>
  </v-app>
</template>

<script>
import BottomNav from '@/components/BottomNav'
import TopNav from '@/components/TopNav'
import Options from '@/components/Options'

export default {
  name: 'App',
  components: { BottomNav, Options, TopNav },
  data () {
    return {
      browser: 'computer',
      text: 'default'
    }
  },
  mounted: function () {
    var isBrowser = {
      android: function () { return /Android/i.test(navigator.userAgent) },
      ios: function () { return /iPhone|iPad|iPod/i.test(navigator.userAgent) },
    }

    if ( isBrowser.android() ) { this.browser = 'android' }
    if ( isBrowser.ios() ) { this.browser = 'ios' }
  }
}
</script>

<style>
body {
  background-color: #303030;
  padding-top: 60px;
}
</style>
