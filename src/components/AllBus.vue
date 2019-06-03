<template>
  <div class="pd-4">
    <BusCard
      v-for="line in lines" :key="`line-${line.id}`"
      :line="line" @click="trackIncrease()"
    ></BusCard>
  </div>
</template>

<script>
import BusCard from './BusCard.vue';
import BusController from '../controllers/BusController';

export default {
  name: 'AllBus',
  components: {
    BusCard
  },
  data() {
    return {
      lines: BusController.availableLines(),
      trackCounter: 0
    }
  },
  methods: {
    trackIncrease () {
      this.trackCounter++;
      this.$ga.event('all-buss-card-click', 'increase', this.trackCounter);
    }
  }
}
</script>
