<template>
  <v-card v-if="showAlert" class="ma-3 mb-4 pt-3" :color="primaryColor"
    dark ripple hover elevation="6" :href="link" target="_blank"
  >
    <v-card-title v-if="title">
      <h2 id="card-title" class="headline"><v-icon>info</v-icon> {{ title }} </h2>
    </v-card-title>
    <v-layout
      :class="['px-2', secondaryColor]"
      column align-center
    >
      <v-flex xs12>
      </v-flex>
    </v-layout>
    <v-layout class="px-2" column align-center>
      <v-flex xs12>
        <p>{{ text }}</p>
      </v-flex>
    </v-layout>
    <v-layout row align-center :class="['pa-2', tertiaryColor]">
      <v-flex xs12>
        <h3 class="caption"><v-icon small>open_in_new</v-icon> {{ buttonLabel }}</h3>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'AlertCard',
  data() {
    return {
      link: 'https://www.ufmg.br/dlo/tranporteinterno.php',
      text: 'Você pode conferir o quadro oficial de horários no site do DLO',
      buttonLabel: 'Acessar PDF com horários',
      variant: "info"
    }
  },
  computed: {
    showAlert: () => {
      return true;
    },
    primaryColor() {
      if (this.variant === "danger") return "red lighten-3";
      if (this.variant === "info") return "blue darken-3";
      return "grey darken-2";
    },
    secondaryColor() {
      if (this.variant === "danger") return "red lighten-1";
      if (this.variant === "info") return "blue darken-2";
      return "grey darken-1";
    },
    tertiaryColor() {
      if (this.variant === "danger") return "red lighten-2";
      if (this.variant === "info") return "blue darken-2";
      return "grey darken-1";
    }
  }
}
</script>

<style scoped>
#card-title {
  font-weight: bold;
}
</style>
