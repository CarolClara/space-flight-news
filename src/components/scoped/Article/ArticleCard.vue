<template>
  <div class="box">
    <div class="columns is-mobile">
      <div
          class="column"
          :style="[index % 2 ? { order: 1 } : { order: 0 }]"
      >
        <figure class="image article-image">
          <img
              :src="article.imageUrl"
              :alt="article.title"
          >
        </figure>
      </div>

      <div class="column is-three-fifths article-content">
        <div class="content">
          <h1 class="title is-5 mb-1 has-text-justified">
            {{ article.title }}
          </h1>

          <div class="is-flex is-justify-content-space-between article-infos">
            <b-field class="is-size-7 is-align-items-center">
              <p>{{ formatDate() }}</p>
            </b-field>

            <b-field>
              <b-button
                  @click="openArticleSite"
                  size="is-small"
                  class="news-site-button"
              >
                Ir para o site
              </b-button>
            </b-field>
          </div>

          <p class="is-size-6 article-summary">
            {{ article.summary || "Resumo não informado." }}
          </p>
        </div>

        <b-field class="article-actions">
          <b-button
              style="{ background-color: #1E2022 }"
              :loading="isLoading"
              @click="openArticleModal"
              type="is-primary"
          >
            Ver Mais
          </b-button>
        </b-field>
      </div>
    </div>
  </div>
</template>

<script>

import ArticleModal from "./ArticleModal";
import {format} from "date-fns";
import {mapState} from "vuex";

export default {
  name: "ArticleCard",
  props: {
    article: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState('articles', { isLoading: 'loading' })
  },
  methods: {
    formatDate () {
      const date = new Date(this.article.publishedAt)
      return format(date, 'dd/MM/yyyy')
    },
    openArticleSite () {
      window.open(this.article.url, '_blank')
    },
    openArticleModal () {
      const modalProps = {
        article: this.article
      }

      this.$buefy.modal.open({
        parent: this,
        component: ArticleModal,
        props: modalProps,
        hasModalCard: true
      });
    }
  }
}
</script>

<style scoped>
.article-image {
  height: 100%;
}
.article-image > img {
  height: 100%;
}
.article-content {
  display: flex;
  flex-direction: column;
}
.article-actions {
  margin-top: auto;
}
.news-site-button {
  height: 1.5em;
  font-family: RobotoCondensed, sans-serif;
}
.button.is-primary {
  background-color: #302E53;
}
.button.is-primary:hover {
  background-color: #302E53F2;
}
h1.title {
  color: #1E2022;
}
</style>
