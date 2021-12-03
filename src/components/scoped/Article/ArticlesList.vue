<template>
  <section>
    <div
        v-for="(article, index) in this.articles"
        :key="index"
        class="columns is-centered"
    >
      <div class="column is-two-thirds">
        <article-card
            :article="article"
            :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ArticleCard from "./ArticleCard";
import {mapState} from "vuex";

export default {
  name: "ArticlesList",
  components: { ArticleCard },
  props: {
    articles: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState('articles', { isLoading: 'loading' })
  }
}
</script>

<style scoped>
section {
  background-color: #1E2022;
}
</style>
