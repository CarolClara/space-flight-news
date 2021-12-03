<template>
  <section class="px-6 py-4">
    <b-field
        class="card-image has-text-centered"
    >
      <b-image
          :src="require('@/assets/rocket-logo-D07017.png')"
          class="is-128x128 is-inline-block"
          alt="Space Flight News Logo"
      />
    </b-field>
    <b-field
        class="has-text-centered"
    >
      <h1
          class="title custom-title"
      >
        {{ pageTitle }}
      </h1>
    </b-field>
    <hr class="title-hr">
  </section>
</template>

<script>
export default {
  name: "PageTitle",
  data: () => ({
    pageTitle: "Space Flight News"
  })
}
</script>

<style scoped>
hr.title-hr {
  border-top: 1px solid #D07017;
  background-color: #D07017;
  height: 1px;
}
.title {
  color: #D07017;
}
</style>
