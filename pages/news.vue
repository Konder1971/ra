<template>
  <div class="news">
    <div class="section">
      <div class="section-col">
        <Posts />
      </div>
    </div>
  </div>
</template>

<script>
import Posts from '~/components/Posts'
export default {
  components: {
    Posts
  },
  head: {
    title: 'News Page',
    meta: [
      { hid: 'description', name: 'description', content: 'News page description' },
      { hid: 'keywords', name: 'keywords', content: 'News pag keywords' }
    ],
    link: [{ rel: 'canonical', href: 'https://rightapplications.com/news' }]
  }
}
</script>

<style scoped>
</style>
