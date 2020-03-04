<template>
  <v-card
    :class="['ma-3 pt-2', { 'apply-transparency': line.isDisabled }]"
    color="blue-grey darken-1"
    dark :ripple="!line.isDisabled" :hover="!line.isDisabled"
    v-on:click="openModalDetails()"
  >
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
        <h3 v-if="line.isDisabled" class="caption">DESATIVADO</h3>
        <h3 v-else class="caption"><v-icon small>add</v-icon> DETALHES</h3>
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
  }),
  methods: {
    openModalDetails() {
      if (this.line.isDisabled) return;
      this.dialog = true;
    }
  }
}
</script>

<style>
.align-text-left {
  text-align: left;
}

.apply-transparency {
  opacity: 0.4;
}
</style>
