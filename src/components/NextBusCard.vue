<template>
  <v-card
    class="ma-3 pt-2" :color="details.time > now ? 'light-green darken-3' : 'grey darken-2'"
    dark ripple hover v-on:click="dialog = true" elevation="6"
  >
    <v-dialog v-model="dialog" width="400px" lazy>
      <BusSchedule v-model="dialog" v-on:close-dialog="dialog = false"
        :line="details._line"
      />
    </v-dialog>
    <v-layout row align-center class="pb-2">
      <v-flex xs6>
        <h3 class="headline">{{ details._line.name }}</h3>
        <span v-if="!details._line.canHideDescription" class="caption description">{{ details._line.description }}</span>
        <span v-if="details.disclaimer" class="caption description disclaimer">
          {{ details.disclaimer.description }}
        </span>
      </v-flex>
      <v-flex xs6>
        <h3 class="headline">{{ details.time | timeToString}}</h3>
        <span class="caption disclaimer mt-0">{{ details.time > now ? 'saída' : 'saiu' }} do ponto inicial</span>
      </v-flex>
    </v-layout>
    <v-layout row align-center
      :class="{'pa-1': true, 'light-green darken-2': details.time > now, 'grey darken-1': details.time <= now}"
    >
      <v-flex xs12>
        <h3 class="caption"><v-icon small>add</v-icon> DETALHES</h3>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import BusSchedule from './BusSchedule.vue';
import { getNowTime } from '../utils'

export default {
  name: "NextBusCard",
  components: {
    BusSchedule
  },
  props: {
    details: Object,
  },
  data: () => ({
    dialog: false
  }),
  filters: {
    timeToString: function (timeString) {
      const time = new Date(timeString);
      const hour = (`00${time.getHours()}`).substr(-2,2);
      const minutes = (`00${time.getMinutes()}`).substr(-2,2);
      return `${hour}:${minutes}`;
    },
  },
  computed: {
    now: () => {
      const now = getNowTime();
      now.setFullYear(1970);
      now.setMonth(0);
      now.setDate(1);
      return now;
    }
  }
}
</script>

<style scoped>
.description {
  display: block;
}

.disclaimer {
  opacity: 0.5;
}
</style>
