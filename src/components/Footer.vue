<template>
  <v-footer height="auto" light>
    <v-layout justify-center row wrap light class="mt-4">
      <v-card-text class="px-5">
        <p>
          Este é um projeto <i>open-source</i>, por isso sua colaboração é essencial!
        </p>
        <p>
          Caso ocorra alteração nos horários ou você encontre algum erro/bug,
          deixe uma mensagem no GitHub do projeto.
        </p>
      </v-card-text>
      <div class="mb-3">
        <v-btn v-for="link in links" :key="link.text" :href="link.url" target="_blank" flat round>
          {{ link.text }}
        </v-btn>
      </div>
      <v-flex grey lighten-2 py-3 text-xs-center xs12>
        Made with <v-icon small>favorite</v-icon> by
        <a class="black--text" href="https://github.com/italohdc" target="_blank">
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
        text: 'GitHub',
        url: 'https://github.com/italohdc/UFMG-Bus'
      },
      {
        text: 'Licença',
        url: 'https://github.com/italohdc/UFMG-Bus/blob/master/LICENSE'
      },
      {
        text: 'Reportar Problema',
        url: 'https://github.com/italohdc/UFMG-Bus/issues'
      },
    ]
  })
}
</script>
