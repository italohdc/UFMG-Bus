<template>
  <div class="pd-4">
    <BusCard
      v-for="line in lines" :key="`line-${line.id}`"
      :line="line"
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
      lines: BusController.availableLines()
    }
  }
}
</script>
