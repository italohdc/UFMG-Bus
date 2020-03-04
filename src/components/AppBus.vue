<template>
  <div>
    <div class="light-blue darken-4 bottom-shadow">
      <v-tabs v-model="activeTab" class="app-center-container" elevation="12"
        color="light-blue darken-4" dark slider-color="light-blue lighten-5" grow
      >
        <v-tab key="next">Próximos</v-tab>
        <v-tab key="lines">Linhas</v-tab>
      </v-tabs>
    </div>

    <div class="app-center-container">
      <v-tabs-items v-model="activeTab">
        <v-tab-item key="next">
          <NextBus id="next-bus"></NextBus>
        </v-tab-item>
        <v-tab-item key="lines">
          <AllBus id="next-bus"></AllBus>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import BusController from '../controllers/BusController';
import AllBus from './AllBus.vue';
import NextBus from './NextBus.vue';

export default {
  name: 'AppBus',
  components: {
    AllBus,
    NextBus
  },
  data() {
    return {
      startPoint: null,
      endPoint: null,
      stops: BusController.availableStops(),
      activeTab: null
    }
  }
}
</script>

<style>
.bottom-shadow {
  -webkit-box-shadow: 0 4px 2px -2px rgba(0,0,0,0.6);
  -moz-box-shadow: 0 4px 2px -2px rgba(0,0,0,0.6);
  box-shadow: 0 4px 2px -2px rgba(0,0,0,0.6);
}
</style>
