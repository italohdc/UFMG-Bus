<template>
  <v-footer height="auto" light>
    <v-layout justify-center row wrap light>
      <v-card-text>
        Este é um projeto de código aberto desenvolvido utilizando Vue.js
      </v-card-text>
      <v-btn v-for="link in links" :key="link.text" :href="link.url" target="_blank" flat round>
        {{ link.text }}
      </v-btn>
      <v-flex grey lighten-2 py-3 text-xs-center xs12>
        Made with <v-icon small>favorite</v-icon> by
        <a class="black--text" href="https://italolelis.com" target="_blank">
          <strong>Italo Lelis</strong>
        </a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    links: [
      {
        text: 'Sobre',
        url: 'https://github.com/italohdc/UFMG-Bus'
      },
      {
        text: 'GitHub',
        url: 'https://github.com/italohdc/UFMG-Bus'
      },
      {
        text: 'Licença',
        url: 'https://github.com/italohdc/UFMG-Bus/blob/master/LICENSE'
      }
    ]
  })
}
</script>
