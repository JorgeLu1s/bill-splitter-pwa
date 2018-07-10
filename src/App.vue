<template>
  <v-app id="app" text-center dark app>
    <Toolbar></Toolbar>
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
import Toolbar from '@/components/Toolbar'
import BottomNav from '@/components/BottomNav'
import TopNav from '@/components/TopNav'

export default {
  name: 'App',
  components: { Toolbar, BottomNav, TopNav },
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
