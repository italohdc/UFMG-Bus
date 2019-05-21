<template>
  <v-card
    class="ma-3"
    color="blue-grey lighten-5"
    dark
    ripple
    hover
  >
    <v-card-title class="blue-grey lighten-1">
      <div>
        <h3 class="headline">{{ line }}</h3>
        <span class="subheading">Período Letivo</span>
      </div>
      <v-spacer></v-spacer>
      <div>
        <span class="subheading">em aproximadamente</span>
        <h3 class="title">{{ eta }} minutos</h3>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "BusCard",
  props: {
    line: String,
    eta: Number
  }
}
</script>
