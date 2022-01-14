<template>
  <div class="category">
    <div class="section">
      <div class="section-col">
        <h1>{{ $route.params.category }}</h1>
      </div>
      <div class="section-col">
        <NavigationCategory />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationCategory from '~/components/navigationcategory'
export default {
  components: {
    NavigationCategory
  }
}
</script>

<style scoped>
@media (min-width: 768px) {
  .category .section {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .category .section-col:first-child {
    width: 75%;
  }
  .category .section-col:last-child {
    width: 25%;
  }
}
</style>
