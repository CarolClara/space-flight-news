<template>
  <footer
      v-if="hasArticles"
      class="mt-5"
  >
    <div v-if="!isLoading" class="is-flex is-flex-direction-column is-align-items-center my-6">
      <b-icon size="is-small" icon="checkbox-blank-outline" />
      <b-icon size="is-small" icon="checkbox-blank-outline" />
      <b-icon size="is-small" icon="checkbox-blank-outline" />
    </div>

    <b-field class="article-actions is-flex is-justify-content-center pb-5">
      <b-button
          :loading="isLoading"
          @click="loadMore"
          type="is-primary"
      >
        Carregar mais
      </b-button>
    </b-field>
  </footer>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ArticlesLoadMore",
  props: {
    hasArticles: {
      type: Boolean
    }
  },
  computed: {
    ...mapState('articles', { isLoading: 'loading' })
  },
  methods: {
    loadMore () {
      this.$emit('get-more-articles')
    }
  }
}
</script>

<style scoped>
.button.is-primary {
  background-color: #D07017;
}
.button.is-primary:hover {
  background-color: #D07017E3;
}
</style>
