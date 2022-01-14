<template>
  <div class="project">
    <div class="section">
      <div class="section-col">
        <h1>Project {{ id }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  middleware: ['checkAuth'],
  head: {
    title: '',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: ''
      }
    ],
    link: [{ rel: 'canonical', href: '' }]
  }
}
</script>

<style scoped>

</style>
