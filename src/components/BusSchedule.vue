<template>
  <v-card>
    <!-- Card Header -->
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

    <!-- Card Tabs -->
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

    <!-- Card Content -->
    <v-tabs-items v-model="activeTab">
      <v-tab-item key="schedule" class="px-2 py-4">

        <!-- Days of Week -->
        <v-layout row align-center wrap class="pb-4">
          <v-flex v-for="(day, index) in daysOfWeek" :key="`day-${line.id}-${index}`" class="py-1">
            <div :class="`${day.isActive ? 'amber lighten-1' : 'grey lighten-3'} py-2 mx-1 rounded-day`">
              {{ day.name }}
            </div>
          </v-flex>
        </v-layout>

        <!-- Timestamps -->
        <v-layout v-for="hour in scheduleByHour" :key="`stop1-${line.id}-${hour.hour}`" row align-center class="py-1">
          <v-flex xs3 class="pr-2">
            <v-layout justify-end>{{ `${hour.hour}h` }}</v-layout>
          </v-flex>
          <v-flex xs9 class="pl-2">
            <v-layout justify-start>
              <v-chip v-for="(schedule, index) in hour.schedules" :key="`stop2-${line.id}-${index}`" class="text-left subheading">
                {{ schedule.time | timeToString }}
                <span v-if="schedule.disclaimer" class="ml-1 red--text text--darken-4">{{ schedule.disclaimer.icon }}</span>
              </v-chip>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-card-text class="red--text text--darken-4">
          <p v-for="disclaimer in disclaimersToShow" :key="`disclaimer-${disclaimer.id}`" class="text-left body-2 mb-1">
            {{ disclaimer.icon }}
            {{ disclaimer.description }}
          </p>
        </v-card-text>
      </v-tab-item>

      <!-- Route -->
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
import BusController from '../controllers/BusController';
import { stringToLocalTime } from '../utils'

export default {
  name: 'BusSchedule',
  props: {
    line: { type: Object, required: false },
  },
  data: () => ({
    activeTab: null,
  }),
  computed: {
    scheduleByHour: function () {
      const schedules = this.line._schedule.times.map(time => ({
        time: stringToLocalTime(time.time),
        disclaimer: BusController.findDisclaimer(time._disclaimer),
      }));

      const hours = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
      const scheduleByHour = hours.map(hour => {
        return {
          hour: hour,
          schedules: schedules.filter(time => hour === time.time.getHours())
        }
      });
      return scheduleByHour;
    },
    daysOfWeek: function () {
      const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
      return days.map((day, index) => {
        return {
          name: day,
          isActive: this.line._schedule.daysOfWeek.includes(index)
        }
      });
    },
    disclaimersToShow: function () {
      let disclaimers = this.line._schedule.times
        .map(time => time._disclaimer)
        .filter(disclaimer => !!disclaimer)
        .filter(disclaimer => !!disclaimer);

      disclaimers = disclaimers.filter(function(item, pos) {
        return disclaimers.indexOf(item) == pos;
      })

      return disclaimers.map(disclaimer => BusController.findDisclaimer(disclaimer));
    },
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

.rounded-day {
  border-radius: 100px;
}
</style>
