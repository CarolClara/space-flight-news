<template>
  <b-field
      grouped
  >
    <b-field>
      <b-input
          @keyup.native.enter="filterArticles"
          v-model="filters.text"
          placeholder="Buscar..."
          type="search"
      />

      <p class="control">
        <b-button
            @click="filterArticles"
            :loading="isLoading"
            class="button"
            icon-left="magnify"
        />
      </p>
    </b-field>

    <b-field>
      <b-select
          :loading="isLoading"
          v-model="filters.sort"
          placeholder="Ordenar por"
      >
        <option
            :value="true"
        >
          Mais antigas
        </option>

        <option
            :value="false"
        >
          Mais novas
        </option>
      </b-select>
    </b-field>
  </b-field>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "SearchArticles",
  data: () => ({
    filters: {
      text: '',
      sort: null,
    }
  }),
  computed: {
    ...mapState('articles', { isLoading: 'loading' })
  },
  methods: {
    filterArticles () {
      this.$emit('search-by-filters', this.filters)
    }
  }
}
</script>

<style scoped>
.control .button {
  color: #302E53;
}
</style>
