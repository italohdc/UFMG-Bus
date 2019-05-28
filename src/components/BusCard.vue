<template>
  <v-card class="ma-3 pt-2" color="blue-grey darken-1" dark ripple hover v-on:click="dialog = true">
    <v-dialog v-model="dialog" width="400px" lazy>
      <BusSchedule v-on:close-dialog="dialog = false" :line="line"/>
    </v-dialog>
    <v-layout row align-center class="pb-1">
      <v-flex xs4 class="pa-1">
        <h3 class="headline">{{ line.name }}</h3>
      </v-flex>
      <v-flex xs8 class="align-text-left">
        <span class="subheading">{{ line.description }}</span>
      </v-flex>
    </v-layout>
    <v-layout row align-center class="blue-grey darken-2 pa-1">
      <v-flex xs12>
        <h3 class="caption"><v-icon small>add</v-icon> DETALHES</h3>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import BusSchedule from './BusSchedule.vue';

export default {
  name: "BusCard",
  components: {
    BusSchedule
  },
  props: {
    line: Object,
  },
  data: () => ({
    dialog: false
  })
}
</script>

<style>
.align-text-left {
  text-align: left;
}
</style>
