<template>
  <section class="px-6 py-4">
    <b-navbar class="navbar-bc">
      <template #end>
        <search-articles
            @search-by-filters="filterArticles"
        />
      </template>
    </b-navbar>
  </section>
</template>

<script>
import SearchArticles from "./global/Header/SearchArticles";

export default {
  name: "Navbar",
  components: {SearchArticles},
  methods: {
    filterArticles (filters) {
      this.$emit('search-by-filters', filters)
    }
  }
}
</script>

<style scoped>
.navbar-bc {
  background-color: #1E2022;
}
@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: #1E2022 !important;
  }
}
</style>
