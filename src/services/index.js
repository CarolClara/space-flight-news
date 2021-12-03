import Vue from 'vue'
import axios from "axios"
import VueAxios from "vue-axios"

import ArticlesApi from './modules/articles.service'

Vue.use(VueAxios, axios);

export {
  ArticlesApi
}
