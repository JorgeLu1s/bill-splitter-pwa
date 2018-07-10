<template>
  <v-toolbar color="black" fixed>
    <v-toolbar-title>Bourbon Calculator</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="new">New Customer</v-btn>
      <v-btn flat to="newGroup">New Group</v-btn>
    </v-toolbar-items>
    <Options></Options>
  </v-toolbar>
</template>

<script>
import Options from '@/components/Options'

export default {
  name: 'Toolbar',
  components: { Options },
}
</script>
