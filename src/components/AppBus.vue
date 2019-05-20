<template>
  <div>
    <v-autocomplete
      v-model="startPoint"
      :items="stops"
      :label="'Ponto de Partida'"
      item-text="name"
      prepend-icon="mdi-city"
      return-object
    ></v-autocomplete>
    <v-autocomplete
      v-model="endPoint"
      :items="stops"
      :label="'Destino'"
      item-text="name"
      prepend-icon="mdi-city"
      return-object
    ></v-autocomplete>
    <p>Start Point: {{startPoint}}</p>
    <p>End Point: {{endPoint}}</p>
  </div>
</template>

<script>
import BusController from '../controllers/BusController';

const busController = new BusController();
const availableStops = busController.availableStops();

export default {
  name: 'AppBus',
  data() {
    return {
      startPoint: null,
      endPoint: null,
      stops: busController.availableStops()
    }
  }
}
</script>
