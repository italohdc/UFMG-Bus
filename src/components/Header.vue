<template>
  <div dark class="light-blue darken-4 pa-4" justify-center>
    <div class="app-center-container">
      <img id="header-img" src="../assets/logo.png" alt="Ônibus UFMG">
      <v-card-text class="white--text subheading">
        Horários dos próximos ônibus internos do campus Pampulha
      </v-card-text>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#header-img {
  max-width: 100%;
}
</style>
