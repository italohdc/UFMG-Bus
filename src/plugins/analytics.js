import Vue from 'vue'
import VueAnalytics from 'vue-analytics';

const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
  id: 'UA-105791948-3',
  debug: {
    enable: !isProd,
    sendHitTask: isProd
  }
});
