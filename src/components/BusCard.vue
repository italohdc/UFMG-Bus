<template>
  <v-card class="ma-3 py-2" color="blue-grey darken-1" dark ripple hover v-on:click="dialog = true">
    <v-dialog v-model="dialog" width="400px">
      <BusSchedule v-on:close-dialog="dialog = false" :line="line"/>
    </v-dialog>
    <v-layout row align-center>
      <v-flex xs10>
        <h3 class="headline">{{ line.name }}</h3>
        <span class="subheading pa-3">{{ line.description }}</span>
      </v-flex>
      <v-flex xs2 class="pa-1">
        <v-icon>arrow_forward_ios</v-icon>
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
