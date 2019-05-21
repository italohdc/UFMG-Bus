import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify, {
  iconfont: 'md',
  lang: {
    locales: { pt },
    current: 'pt'
  },
})
