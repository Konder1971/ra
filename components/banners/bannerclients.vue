<template>
  <div class="banner bannerclients" :style="{'background-image': 'url(' + require('~/assets/images/banners/get3v.jpg') + ')' }">
    <div class="section">
      <div class="section-col">
        <header><h1>Clients Rightapplications</h1></header>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner.bannerclients header {
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .banner.bannerclients {
    margin-bottom: 60px;
  }
}
</style>
