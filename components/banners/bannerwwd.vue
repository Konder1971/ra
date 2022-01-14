<template>
  <div class="banner bannerWwd" :style="{'background-image': 'url(' + require('~/assets/images/banners/about.jpg') + ')' }">
    <div class="section">
      <div class="section-col">
        <header><h1>Contact us Today!</h1></header>
        <nuxt-link class="btn-banner" to="/request-a-quote" title="">
          Get a Quote
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner.bannerWwd header {
  margin-bottom: 20px;
}
@media (min-width: 768px) {
  .banner.bannerWwd {
    margin-bottom: 60px;
  }
   .banner.bannerWwd .section-col {
    width: 50%;
  }
}
</style>
