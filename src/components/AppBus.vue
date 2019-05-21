<template>
  <div>
    <v-toolbar dark class="blue-grey py-2">
      <v-autocomplete
        v-model="startPoint"
        :items="stops"
        :label="'Ponto de Partida'"
        item-text="name"
        solo-inverted
        flat
        return-object
      ></v-autocomplete>
    </v-toolbar>
    <v-toolbar dark class="blue-grey py-2">
      <v-autocomplete
        v-model="endPoint"
        :items="stops"
        :label="'Destino'"
        item-text="name"
        solo-inverted
        flat
        return-object
      ></v-autocomplete>
    </v-toolbar>
    <NextBus
      :startPoint="startPoint"
      :endPoint="endPoint"
    ></NextBus>
  </div>
</template>

<script>
import BusController from '../controllers/BusController';
import NextBus from './NextBus.vue';

export default {
  name: 'AppBus',
  components: {
    NextBus
  },
  data() {
    return {
      startPoint: null,
      endPoint: null,
      stops: BusController.availableStops(),
      lines: BusController.availableLines()
    }
  }
}
</script>
