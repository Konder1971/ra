<template>
  <div class="banner bannerBlog" :style="{'background-image': 'url(' + require('~/assets/images/banners/blog.jpg') + ')' }">
    <div class="section">
      <div class="section-col">
        <header><h1>Blog</h1></header>
        <p>Software development company Rightapplications</p>
        <p>Explore our Minds</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner.bannerBlog header {
    margin-bottom: 20px;
}
.banner.bannerBlog p {
  font-size: 25px;
}
@media (min-width: 768px) {
   .banner.bannerBlog .section-col {
    width: 55%;
  }
}
</style>
