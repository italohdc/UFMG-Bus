<template>
  <v-app id="app">
    <Header/>
    <AppBus/>
    <div id="spacer-div"></div>
    <Footer/>
  </v-app>
</template>

<script>
import AppBus from './components/AppBus.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    AppBus,
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f5f5f5;
  margin: 0 auto;
  min-height: 100%;
}

#spacer-div {
  width: 100%;
  height: 0;
  margin: auto;
}

.app-center-container {
  max-width: 580px;
  margin: 0 auto;
}
</style>
