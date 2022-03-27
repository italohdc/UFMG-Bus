<template>
  <div dark class="light-blue darken-4 pt-4 px-4 pb-1" justify-center>
    <div class="app-center-container">
      <img id="header-img" src="../assets/logo.png" alt="Ônibus UFMG">
      <v-card-text class="white--text subheading">
        Horários dos próximos ônibus internos do campus Pampulha
        <br>
        (Período Letivo)
      </v-card-text>
      <v-card-text class="white--text subheading alert-opacity">
        Atualizado em <b>26/03/2022</b>
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

.alert-opacity {
  opacity: 0.6;
}
</style>
