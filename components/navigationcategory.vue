<template>
  <div class="naigationcategory">
    <h2>Categories</h2>
    <!--
        <ul>
          <li><a href="">Breaking News</a></li>
          <li><a href="" title="Development">Development</a></li>
          <li><a href="" title="">Entertainment</a></li>
          <li><a href="" title="software developer news">Software developer news</a></li>
          <li><a href="" title="Web Design">Web Design</a></li>
        </ul>
        -->
    <div class="categorylinks">
      <a v-for="categoryblog in categoryesblog" :key="categoryblog" title="" @click.prevent="openCategoryblog(categoryblog)">{{ categoryblog.categoryblog }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categoryesblog: [
        { categoryblog: 'Breaking News' },
        { categoryblog: 'Development' },
        { categoryblog: 'Entertainment' },
        { categoryblog: 'Software developer news' },
        { categoryblog: 'Web Design' }
      ]
    }
  },
  methods: {
    openCategoryblog (categoryblog) {
      this.$router.push('/blog/' + categoryblog.categoryblog)
    }
  },
  head: {
    title: '',
    meta: [
      { hid: 'description', name: 'description', content: '' },
      { hid: 'keywords', name: 'keywords', content: '' }
    ],
    link: [{ rel: 'canonical', href: '' }]
  }
}
</script>

<style scoped>
.naigationcategory a,
.naigationcategory a:hover {
  text-decoration: none;
}
.naigationcategory h2 {
  margin-bottom: 15px;
}
.categorylinks a {
  cursor: pointer;
  display: block;
  margin-bottom: 18px;
}
.categorylinks a:hover,
.categorylinks a.active {
  color: #666;
}
@media (min-width: 768px) {
  .naigationcategory h2 {
    margin-top: 10px;
  }
}
</style>
