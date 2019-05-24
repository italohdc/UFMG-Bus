<template>
  <v-card
    class="ma-3 py-2"
    color="blue-grey darken-1"
    dark
    ripple
    hover
    v-on:click="dialog = true"
  >
    <v-dialog v-model="dialog" width="400px">
      <BusSchedule v-model="dialog" v-on:close-dialog="dialog = false"
        :line="line"
      />
    </v-dialog>
    <v-layout row align-center>
      <v-flex xs6>
        <h3 class="headline">{{ line.name }}</h3>
        <span class="caption">{{ line.description }}</span>
      </v-flex>
      <v-flex xs6>
        <span class="caption">sairá do ponto inicial<br>em aproximadamente</span>
        <h3 class="title">10 minutos</h3>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import BusSchedule from './BusSchedule.vue';

export default {
  name: "NextBusCard",
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
