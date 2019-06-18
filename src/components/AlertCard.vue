<template>
  <v-card v-if="showAlert" class="ma-3 mb-4" color="red lighten-3"
    light ripple hover elevation="6" :href="link" target="_blank"
  >
    <v-card-title>
      <h2 id="card-title" class="headline"><v-icon>info</v-icon> Aviso </h2>
    </v-card-title>
    <v-layout class="px-2 red lighten-1" column align-center>
      <v-flex xs12>
      </v-flex>
    </v-layout>
    <v-layout class="px-2" column align-center>
      <v-flex xs12>
        <p>{{ text }}</p>
      </v-flex>
    </v-layout>
    <v-layout row align-center class="red lighten-2 pa-2">
      <v-flex xs12>
        <h3 class="caption"><v-icon small>open_in_new</v-icon> Ler Notícia</h3>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'AlertCard',
  data() {
    return {
      link: 'https://ufmg.br/comunicacao/noticias/rota-de-onibus-interno-da-ufmg-e-alterada-em-dias-de-jogos-da-copa-america',
      text: 'Os ônibus podem ter rotas e horários alterados em dias de jogos da Copa América no Mineirão'
    }
  },
  computed: {
    showAlert: () => {
      const now = new Date();
      const startDate = new Date('2019-06-18T00:00:00.000Z');
      const endDate = new Date('2019-06-25T04:00:00.000Z');

      return (now > startDate && now < endDate);
    }
  }
}
</script>

<style scoped>
#card-title {
  font-weight: bold;
}
</style>
