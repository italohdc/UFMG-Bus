<template>
  <div class="pd-4">
    <BusCard
      v-for="line in sortedLines" :key="`line-${line.id}`"
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
  computed: {
    sortedLines() {
      return this.lines.sort((a, b) => {
        if (a.isDisabled && !b.isDisabled) return 1;
        if (!a.isDisabled && b.isDisabled) return -1;
        return 0;
      });
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
