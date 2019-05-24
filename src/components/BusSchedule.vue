<template>
  <v-card>
    <v-toolbar flat class="yellow lighten-1">
      <v-spacer></v-spacer>
      <v-btn icon @click="closeDialog()">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-toolbar flat class="yellow lighten-1">
      <h2>
        <v-icon medium>directions_bus</v-icon>
        {{ line.name }}
      </h2>
    </v-toolbar>
    <v-toolbar flat class="yellow lighten-1">
      <p>{{ line.description }}</p>
    </v-toolbar>

    <v-tabs
      v-model="activeTab"
      color="yellow lighten-1"
      light
      slider-color="black"
      grow
    >
      <v-tab key="schedule" ripple>Horários</v-tab>
      <v-tab key="route" ripple>Rota</v-tab>
    </v-tabs>
    <v-tabs-items v-model="activeTab">
      <v-tab-item key="schedule" class="px-2 py-4">
        <v-layout v-for="times in timeByHour" :key="`stop1-${line.id}-${times.hour}`"
          row align-center class="py-1"
        >
          <v-flex xs3 class="pr-2">
            <v-layout justify-end>{{ `${times.hour}h` }}</v-layout>
          </v-flex>
          <v-flex xs9 class="pl-2">
            <v-layout justify-start>
              <v-chip v-for="(time, index) in times.times" :key="`stop2-${line.id}-${index}`" class="text-left subheading">
                {{ time | timeToString }}
              </v-chip>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-tab-item>
      <v-tab-item key="route" class="pa-2">
        <v-card-text>
          <p class="text-left title pl-4 py-2">Início</p>
          <p v-for="(route, index) in line._route.route" :key="`stop-${line.id}-${index}`" class="text-left subheading pl-2">
            - {{ route._stop.name }}
          </p>
          <h2 class="text-left title pl-4 py-2">Fim</h2>
        </v-card-text>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import { stringToLocalTime } from '../utils'

export default {
  name: 'BusSchedule',
  props: {
    line: { type: Object, required: false },
  },
  data: () => ({
    activeTab: null
  }),
  computed: {
    timeByHour: function () {
      const times = this.line._schedule.times.map(time => stringToLocalTime(time.time));

      const hours = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
      const timesByHour = hours.map(hour => {
        return {
          hour: hour,
          times: times.filter(time => hour === time.getHours())
        }
      });
      return timesByHour;
    }
  },
  methods: {
    closeDialog() {
      this.$emit('close-dialog');
    },
  },
  filters: {
    timeToString: function (inputTime) {
      let time = inputTime;
      if (!(inputTime instanceof Date)) { time = stringToLocalTime(inputTime) }

      const hour = (`00${time.getHours()}`).substr(-2,2);
      const minutes = (`00${time.getMinutes()}`).substr(-2,2);
      return `${hour}:${minutes}`;
    }
  }
}
</script>

<style>
.text-left {
  text-align: left;
}
</style>
