import Vue from 'vue'
import Vuex from 'vuex'

import articles from './modules/articles.store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    articles
  }
})

export default store
