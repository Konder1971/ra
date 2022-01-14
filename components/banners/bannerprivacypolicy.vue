<template>
  <div class="banner bannerprivacypolicy" :style="{'background-image': 'url(' + require('~/assets/images/banners/about.jpg') + ')' }">
    <div class="section">
      <div class="section-col">
        <header><h1>Privacy Policy Rightapplications</h1></header>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner.bannerprivacypolicy header {
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .banner.bannerprivacypolicy {
    margin-bottom: 60px;
  }
  .banner.bannerprivacypolicy .section-col {
    width: 67%;
  }
}
</style>
