<template>
  <div class="container-next-bus">
    <NextBusCard
      v-for="(schedule, index) in nextBuses" :key="`${index}-${schedule._line.id}`"
      :details="schedule" :selectedTime="schedule.time" @click="trackIncrease()"
    ></NextBusCard>

    <AlertCard />

    <v-card-text v-if="nextBuses.length === 0" class="pa-4">
      <p class="title py-4">
        Nenhum ônibus com horário previsto para saída hoje
      </p>
    </v-card-text>
  </div>
</template>

<script>
import AlertCard from './AlertCard.vue';
import NextBusCard from './NextBusCard.vue';
import BusController from '../controllers/BusController';

export default {
  name: 'NextBus',
  components: {
    AlertCard,
    NextBusCard
  },
  data() {
    return {
      lines: BusController.availableLines(),
      nextBuses: BusController.nextSchedules(20, 12),
      trackCounter: 0
    }
  },
  methods: {
    trackIncrease () {
      this.trackCounter++;
      this.$ga.event('next-card-click', 'increase', this.trackCounter);
    }
  }
}
</script>
