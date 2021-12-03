<template>
  <div>
    <Navbar
        @search-by-filters="filterArticles"
    />
    <page-title />
    <articles-list
        :articles.sync="allArticles"
    />
    <articles-load-more
        :has-articles="hasArticles"
        @get-more-articles="searchArticles"
    />
  </div>
</template>

<script>
import ArticlesLoadMore from "./global/Footer/ArticlesLoadMore";
import ArticlesList from "./scoped/Article/ArticlesList";
import PageTitle from "./global/Header/PageTitle";
import Navbar from "./Navbar";
import {mapState} from "vuex";

export default {
  name: "Articles",
  components: {
    ArticlesLoadMore,
    ArticlesList,
    PageTitle,
    Navbar
  },
  data: () => ({
    filters: {
      text: '',
      sort: null,
      id: null
    },
    allArticles: []
  }),
  computed: {
    hasArticles () {
      return !!this.articles.length
    },
    ...mapState('articles', ["articles"])
  },
  methods: {
    filterArticles ({ text, sort }) {
      this.filters.text = text
      this.filters.sort = sort

      this.$store.commit("articles/EMPTY_LIST_ARTICLES")
      this.allArticles = []

      this.searchArticles()
    },
    async searchArticles () {
      this.filters.id = this.getLastId()

      await this.$store.dispatch('articles/listArticles', this.filters)

      if (this.error)
        this.openToast('Ocorreu um erro ao buscar os artigos. Por favor, tente novamente.')
      else
        this.allArticles = this.allArticles.concat(this.articles)
    },
    getLastId () {
      if (this.articles.length) {
        const {id} = this.articles[this.articles.length - 1]
        return id
      }
      else
        return null
    },
    openToast (msg) {
      this.$buefy.toast.open({
        duration: 5000,
        message: msg,
        position: 'is-bottom',
        type: `is-${this.status}`
      })
    }
  }
}
</script>

<style scoped>

</style>
