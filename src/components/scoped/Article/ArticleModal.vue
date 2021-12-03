<template>
  <b-modal
      :active="isActive"
      :on-cancel="close"
  >
    <div class="modal-card" style="width: auto">
      <section class="modal-card-body p-5">
        <div class="columns">
          <div class="column is-two-fifths article-image">
            <figure class="image">
              <img
                  :src="article.imageUrl"
                  :alt="article.title"
              >
            </figure>
          </div>

          <div class="column">
            <h1 class="title is-5 mb-1 has-text-justified">
              {{ article.title }}
            </h1>

            <b-field>
              <p class="is-size-7">
                {{ formatDate() }}
              </p>
            </b-field>

            <p class="is-size-6">
              {{ article.summary || "Resumo não informado." }}
            </p>
          </div>
        </div>

        <b-field class="article-actions is-flex is-justify-content-center mt-5">
          <b-button
              @click="openSite"
              type="is-primary"
          >
            Ir para o site
          </b-button>
        </b-field>
      </section>
    </div>
  </b-modal>
</template>

<script>
import {format} from "date-fns";

export default {
  name: "ArticleModal",
  props: {
    article: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    isActive: false
  }),
  created() {
    this.isActive = true
  },
  methods: {
    formatDate () {
      const date = new Date(this.article.publishedAt)
      return format(date, 'dd/MM/yyyy')
    },
    close () {
      this.isActive = false
      this.$emit('close')
    },
    openSite () {
      window.open(this.article.url, '_blank')
    }
  }
}
</script>

<style scoped>
.button.is-primary {
  background-color: #1E2022;
}
.button.is-primary:hover {
  background-color: #1E2022E6;
}
div.modal-card {
  border-radius: 5px;
}
</style>
