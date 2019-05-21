<template>
  <div>
    <p>{{startPoint}}</p>
    <p>{{endPoint}}</p>
    <BusCard
      line="Linha 1"
      :eta="10"
    ></BusCard>
  </div>
</template>

<script>
import BusCard from './BusCard';

export default {
  name: 'NextBus',
  components: {
    BusCard
  },
  props: {
    startPoint: { type: [Object], required: false },
    endPoint: { type: [Object], required: false }
  },
  data() {
    return {
    }
  }
}
</script>
